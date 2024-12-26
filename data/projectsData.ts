interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Label PR Custom Actions',
    description: `Creating the Custom GitHub Actions using TypeScript for labelling PR`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/adityadhopade/label_pr_custom_action',
  },
  {
    title: 'Redis Failover Setup',
    description: `Redis Failover Setup using Redis Sentinel and Docker Compose`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/redis-failover-setup',
  },
  {
    title: '3-Tier-App using Terraform',
    description: `Implementing a Three Tier Application using Terraform to create VPC, the Application associated to DB is present under the Private Subnet with the best security practices`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/3-tier-app',
  },
  {
    title: 'AWS Terraform Scripts',
    description: `This contains all resusable scripts on AWS`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/aws_terraform_scripts',
  },
  {
    title: 'Interview Deck',
    description: `Set of Interview Questions on DevOps and Cloud Domain`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/interview_deck',
  },
  {
    title: 'Deploy Chat App using Terraform, Jenkins,EC2 ,S3',
    description: `Chat-app deployment on EC2 using Docker, AWS ECR, TERRAFORM, S3`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/chat-app-jenkins',
  },
  {
    title: 'Deploy Tic-Tac-Toe using GitHub Actions',
    description: `CICD of TIC-TAC-TOE game on Github Actions, Docker, EC2, Terraform, AWS EKS, Slack`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/adityadhopade/chat-app-jenkins',
  },
]

export default projectsData
