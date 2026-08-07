import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const songs = [
  { title: "Juna", artist: "Clairo", src: "/music/juna.mp3" },
  { title: "Amoeba", artist: "Clairo", src: "/music/amoeba.mp3" },
  { title: "The Perfect Pair", artist: "Beabadoobee", src: "/music/the-perfect-pair.mp3" },
  { title: "Apple Cider", artist: "Beabadoobee", src: "/music/apple-cider.mp3" },
  { title: "Glue Song", artist: "Beabadoobee ft. Clairo", src: "/music/glue-song.mp3" },
];

export default function MusicSection() {
  const revealRef = useScrollReveal();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

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
    <section
      id="music"
      className="py-32 px-6"
    >
      <div ref={revealRef} className="section-reveal mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-12">
          <Music className="text-primary h-6 w-6" />
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Vibes
          </h2>
        </div>

        <div className="card-dynamic overflow-hidden rounded-3xl bg-background/50 backdrop-blur-xl border border-border p-6 sm:p-10 shadow-2xl">
          <audio ref={audioRef} src={songs[currentSong].src} preload="metadata" />
          
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            {/* Player UI */}
            <div className="flex-1 w-full flex flex-col items-center md:items-start space-y-6">
              <div className="w-full aspect-square max-w-[240px] rounded-2xl bg-gradient-to-br from-primary/80 to-purple-500 shadow-lg flex items-center justify-center mx-auto md:mx-0">
                <Music className="w-24 h-24 text-white/80" />
              </div>
              
              <div className="text-center md:text-left w-full">
                <h3 className="text-xl font-bold text-foreground truncate">{songs[currentSong].title}</h3>
                <p className="text-muted-foreground truncate">{songs[currentSong].artist}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
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
                  <SkipBack className="w-6 h-6 fill-current" />
                </button>
                <button 
                  onClick={togglePlay}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}
                </button>
                <button 
                  onClick={handleNext}
                  className="text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  aria-label="Next Song"
                >
                  <SkipForward className="w-6 h-6 fill-current" />
                </button>
              </div>
            </div>

            {/* Playlist */}
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                <Volume2 className="w-4 h-4" /> Playlist
              </h4>
              <div className="flex flex-col gap-2">
                {songs.map((song, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectSong(idx)}
                    className={`group flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                      currentSong === idx 
                        ? "bg-primary/10 border border-primary/20" 
                        : "hover:bg-secondary/50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-background border ${currentSong === idx ? "border-primary text-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "border-border text-muted-foreground"}`}>
                        {currentSong === idx && isPlaying ? (
                          <div className="flex gap-0.5 items-end h-3">
                            <div className="w-0.5 h-3 bg-primary animate-[bounce_1s_infinite]" />
                            <div className="w-0.5 h-2 bg-primary animate-[bounce_1s_infinite_0.2s]" />
                            <div className="w-0.5 h-3 bg-primary animate-[bounce_1s_infinite_0.4s]" />
                          </div>
                        ) : (
                          <Play className="w-3 h-3 ml-0.5 opacity-50 group-hover:opacity-100" />
                        )}
                      </div>
                      <div className="truncate">
                        <p className={`text-sm font-medium truncate ${currentSong === idx ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"}`}>
                          {song.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
