import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plane, Bed, Car, TentTree, Repeat } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { label: "Hotels", icon: Bed },
  { label: "Flight", icon: Plane, active: true },
  { label: "Rental", icon: Car },
  { label: "Experiences", icon: TentTree },
  { label: "Transfer", icon: Car },
]

export default function TravelTabs() {
  return (
    <div className="px-4 py-1  bg-transparent">
      {/* Tabs */}
      <div className="flex gap-6 mb-4">
        {tabs.map(({ label, icon: Icon, active }) => (
          <div
            key={label}
            className={cn(
              "flex flex-row items-center text-sm",
              active ? "text-black font-semibold" : "text-muted-foreground"
            )}
          >
            <Icon className={cn("w-5 h-5", active && "fill-black")} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Round Trip / One Way */}
      <RadioGroup defaultValue="round" className="flex items-center gap-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="round" id="round" />
          <label htmlFor="round" className="flex items-center gap-1 text-sm font-medium">
            <Repeat className="w-4 h-4 -scale-x-100" />
            Round Trip
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneway" id="oneway" />
          <label htmlFor="oneway" className="flex items-center gap-1 text-sm font-medium">
            <Repeat className="w-4 h-4" />
            One Way
          </label>
        </div>
      </RadioGroup>
    </div>
  )
}
