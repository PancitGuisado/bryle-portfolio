import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // 1. Get the current IP address
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const currentIp = ipData.ip;

        // 2. Check if this IP has visited before (stored in localStorage)
        const storedIp = localStorage.getItem("portfolio_visitor_ip");
        const hasVisited = localStorage.getItem("portfolio_has_visited");

        // We increment if there's no record of a visit or if the IP has changed
        const isNewVisit = !hasVisited || storedIp !== currentIp;

        const counterKey = "bryle_portfolio_visits_unique";
        let countVal = 0;

        if (isNewVisit) {
          // Increment the counter
          const hitRes = await fetch(`https://countapi.mileshilliard.com/api/v1/hit/${counterKey}`);
          const hitData = await hitRes.json();
          countVal = hitData.value;

          // Save to local storage to avoid counting this IP again
          localStorage.setItem("portfolio_visitor_ip", currentIp);
          localStorage.setItem("portfolio_has_visited", "true");
        } else {
          // Just get the current value without incrementing
          const getRes = await fetch(`https://countapi.mileshilliard.com/api/v1/get/${counterKey}`);
          const getData = await getRes.json();
          countVal = getData.value;
        }

        setVisitorCount(countVal);
      } catch (error) {
        console.error("Error tracking visitor count:", error);
        // Fallback: Try to just get the count if IP check fails
        try {
          const getRes = await fetch("https://countapi.mileshilliard.com/api/v1/get/bryle_portfolio_visits_unique");
          const getData = await getRes.json();
          setVisitorCount(getData.value);
        } catch (e) {
          console.error("Fallback failed:", e);
        }
      }
    };

    trackVisitor();
  }, []);

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bryle James Agra
        </p>
        
        {visitorCount !== null && (
          <div className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-muted/50 hover:text-foreground">
            <Users className="h-3.5 w-3.5 text-primary" />
            <span>Unique Visitors:</span>
            <span className="font-semibold text-foreground">{visitorCount.toLocaleString()}</span>
          </div>
        )}
      </div>
    </footer>
  );
}

