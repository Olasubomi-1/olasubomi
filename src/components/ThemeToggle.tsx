import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/interfaces-switch";
import { useTheme } from "@/hooks/use-theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun className="w-4 h-4 text-muted-foreground" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <Moon className="w-4 h-4 text-muted-foreground" />
    </div>
  );
}
