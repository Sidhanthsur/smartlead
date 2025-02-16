export type Campaign = {
  progress: number
  id: string
  title: string
  sequences: number
  status: string
  statusTime: string
  metrics: {
    sent: {
      count: number
      percentage: number
      color: string
    }
    clicked: {
      percentage: number
      count: number
      color: string
    }
    opened: {
      percentage: number
      count: number
      color: string
    }
    replied: {
      percentage: number
      count: number
      color: string
    }
    positiveReply: {
      percentage: number
      count: number
      color: string
    }
  }
}
