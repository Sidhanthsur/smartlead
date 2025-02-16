import EmailSVG from '@/assets/email.svg'
import LeadsSVG from '@/assets/leads.svg'
import CampaignsSVG from '@/assets/campaigns.svg'
import router from '@/router'
import SlackSVG from '@/assets/slack.svg'
import PlaySVG from '@/assets/play.svg'

const useDashboard = () => {
  const options = [
    {
      label: 'All leads',
      icon: LeadsSVG,
      onClick: () => {
        console.log('All leads clicked')
        router.push({ name: 'dashboard' })
      },
      route: 'dashboard'
    },
    {
      label: 'Master Inbox',
      icon: EmailSVG,
      disabled: true
    },
    {
      label: 'Email Campaigns',
      icon: CampaignsSVG,
      route: 'emails',
      onClick: () => {
        console.log('Email Campaigns clicked')
        router.push({ name: 'emails' })
      }
    }
  ]

  const bottomOptions = [
    {
      label: 'Join Slack Community',
      icon: SlackSVG,
      onClick: () => {
        window.open('https://slack.com', '_blank')
      }
    },
    {
      label: 'Smartlead Tutorials',
      icon: PlaySVG,
      onClick: () => {
        window.open('https://www.youtube.com/@smartleadai', '_blank')
      }
    }
  ]

  return {
    options,
    bottomOptions
  }
}

export default useDashboard
