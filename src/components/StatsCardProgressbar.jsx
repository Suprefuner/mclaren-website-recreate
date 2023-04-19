import { motion } from "framer-motion"

export default function StatsCardProgressbar({ stats }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex-1">
        <h4>
          {stats[0]} <span className="text-white/50">{stats[1].unit}</span>
        </h4>
        <div className={`h-[3px] w-full bg-white/50 relative`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(stats[1].value / stats[1].total) * 100}%`,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="absolute h-full bg-white"
          />
        </div>
      </div>
      <span className="text-2xl font-semibold w-[80px]">{stats[1].value}</span>
    </div>
  )
}
