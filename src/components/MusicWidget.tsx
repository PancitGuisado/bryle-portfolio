import { useState, useRef, useEffect } from "react";
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

const songs = [
  { title: "Juna", artist: "Clairo", src: "/music/juna.mp3" },
  { title: "Amoeba", artist: "Clairo", src: "/music/amoeba.mp3" },
  { title: "The Perfect Pair", artist: "Beabadoobee", src: "/music/the-perfect-pair.mp3" },
  { title: "Apple Cider", artist: "Beabadoobee", src: "/music/apple-cider.mp3" },
  { title: "Glue Song", artist: "Beabadoobee ft. Clairo", src: "/music/glue-song.mp3" },
];

export default function MusicWidget() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  // Play/pause side effect
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const selectSong = (index: number) => {
    setCurrentSong(index);
    setIsPlaying(true);
  };

  return (
    <div ref={widgetRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 active:scale-95 ${
          open || isPlaying
            ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_hsl(var(--primary)/0.15)]"
            : "border-border text-muted-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
        }`}
        aria-label="Local Music"
        title="Local Playlist"
      >
        <Music className="h-4 w-4" />
      </button>

      {/* Dropdown Modal */}
      <div
        className={`absolute -right-16 sm:right-0 top-full mt-3 z-[100] transition-all duration-300 origin-top-right ${
          open
            ? "scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 -translate-y-2"
        }`}
      >
        <div className="w-[320px] sm:w-[350px] overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
            <Music className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-foreground">
              Vibes
            </span>
            <span className="ml-auto text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Playlist
            </span>
          </div>

          <div className="p-4">
            <audio ref={audioRef} src={songs[currentSong].src} preload="metadata" />
            
            {/* Player UI */}
            <div className="flex flex-col items-center space-y-4 mb-6">
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/80 to-purple-500 shadow-md flex items-center justify-center">
                {isPlaying ? (
                   <div className="flex gap-1 items-end h-8">
                     <div className="w-1.5 h-8 bg-white/80 animate-[bounce_1s_infinite]" />
                     <div className="w-1.5 h-5 bg-white/80 animate-[bounce_1s_infinite_0.2s]" />
                     <div className="w-1.5 h-6 bg-white/80 animate-[bounce_1s_infinite_0.4s]" />
                     <div className="w-1.5 h-8 bg-white/80 animate-[bounce_1s_infinite_0.1s]" />
                   </div>
                ) : (
                   <Music className="w-12 h-12 text-white/80" />
                )}
              </div>
              
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-foreground truncate">{songs[currentSong].title}</h3>
                <p className="text-sm text-muted-foreground truncate">{songs[currentSong].artist}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 w-full pt-2">
                <button 
                  onClick={handlePrev}
                  className="text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  aria-label="Previous Song"
                >
                  <SkipBack className="w-5 h-5 fill-current" />
                </button>
                <button 
                  onClick={togglePlay}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-1" />
                  )}
                </button>
                <button 
                  onClick={handleNext}
                  className="text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  aria-label="Next Song"
                >
                  <SkipForward className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="max-h-40 overflow-y-auto pr-1 flex flex-col gap-1 custom-scrollbar">
              {songs.map((song, idx) => (
                <button
                  key={idx}
                  onClick={() => selectSong(idx)}
                  className={`group flex items-center justify-between p-2 rounded-lg transition-all text-left ${
                    currentSong === idx 
                      ? "bg-primary/10 border border-primary/20" 
                      : "hover:bg-secondary/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full bg-background border ${currentSong === idx ? "border-primary text-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "border-border text-muted-foreground"}`}>
                      {currentSong === idx && isPlaying ? (
                        <div className="flex gap-0.5 items-end h-2.5">
                          <div className="w-0.5 h-2.5 bg-primary animate-[bounce_1s_infinite]" />
                          <div className="w-0.5 h-1.5 bg-primary animate-[bounce_1s_infinite_0.2s]" />
                          <div className="w-0.5 h-2 bg-primary animate-[bounce_1s_infinite_0.4s]" />
                        </div>
                      ) : (
                        <Play className="w-2 h-2 ml-0.5 opacity-50 group-hover:opacity-100" />
                      )}
                    </div>
                    <div className="truncate">
                      <p className={`text-xs font-medium truncate ${currentSong === idx ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"}`}>
                        {song.title}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">{song.artist}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
