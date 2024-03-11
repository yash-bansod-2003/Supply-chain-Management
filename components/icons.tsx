import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  GroupIcon,
  Settings,
  SunMedium,
  User,
  X,
  ClipboardList,
  Box,
  type LucideIcon,
  Kanban,
  Link,
  IndianRupee,
  Save,
  PlayCircle,
  Minus,
  Calendar,
  Palette,
  Ruler,
  MoreHorizontal,
  Copy,
  SquarePen,
  PackageSearch,
  Wallet,
  Warehouse,
  Boxes,
  Bell,
  BellRing,
  CheckCircle,
  Upload,
  UploadCloud,
  Trash2,
  FileWarning,
  Users,
  Store,
  MessageSquareMore,
  Receipt,
  BadgeIndianRupee,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg
      id="logo-35"
      width="36"
      height="28.08"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {" "}
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        className="ccompli1"
        fill="#007AFF"
      ></path>{" "}
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        className="ccustom"
        fill="#312ECB"
      ></path>{" "}
    </svg>
  ),
  close: X,
  product: Box,
  task: ClipboardList,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  warehouse: Warehouse,
  inventory: Boxes,
  trash: Trash2,
  group: Users,
  store: Store,
  message: MessageSquareMore,
  receipt: Receipt,
  fileWarning: FileWarning,
  post: FileText,
  notification: BellRing,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  alert: AlertTriangle,
  help: HelpCircle,
  pizza: Pizza,
  bill: BadgeIndianRupee,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  overview: Kanban,
  rupee: IndianRupee,
  save: Save,
  calendar: Calendar,
  playCircle: PlayCircle,
  palette: Palette,
  ruler: Ruler,
  more: MoreHorizontal,
  copy: Copy,
  edit: SquarePen,
  process: PackageSearch,
  wallet: Wallet,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  check: Check,
  cloud: UploadCloud,
  file: File,
  minus: Minus,
  google: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  realTimeTracking: (props: LucideProps) => (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      ></path>
      <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z"></path>
    </svg>
  ),
  roleBasedAccess: (props: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
      ></path>
      <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z"></path>
    </svg>
  ),
  activityManagement: (props: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
      ></path>
      <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z"></path>
    </svg>
  ),
  integratedCommunication: (props: LucideProps) => (
    <svg
      width="40"
      height="42"
      viewBox="0 0 40 42"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
      ></path>
      <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z"></path>
    </svg>
  ),
  autometedRecordKeeping: (props: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
      ></path>
      <rect width="28" height="28" rx="1"></rect>
    </svg>
  ),
  userFriendlyInterface: (props: LucideProps) => (
    <svg
      width="40"
      height="45"
      viewBox="0 0 40 45"
      className="fill-current"
      {...props}
    >
      <path
        opacity="0.5"
        d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
      ></path>
      <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z"></path>
    </svg>
  ),
  dots: (props: LucideProps) => (
    <svg
      width={41}
      height={89}
      viewBox="0 0 41 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="38.9138"
        cy="87.4849"
        r="1.42021"
        transform="rotate(180 38.9138 87.4849)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="74.9871"
        r="1.42021"
        transform="rotate(180 38.9138 74.9871)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="62.4892"
        r="1.42021"
        transform="rotate(180 38.9138 62.4892)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="38.3457"
        r="1.42021"
        transform="rotate(180 38.9138 38.3457)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="13.634"
        r="1.42021"
        transform="rotate(180 38.9138 13.634)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="50.2754"
        r="1.42021"
        transform="rotate(180 38.9138 50.2754)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="26.1319"
        r="1.42021"
        transform="rotate(180 38.9138 26.1319)"
        fill="fill-current"
      />
      <circle
        cx="38.9138"
        cy="1.42021"
        r="1.42021"
        transform="rotate(180 38.9138 1.42021)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="87.4849"
        r="1.42021"
        transform="rotate(180 26.4157 87.4849)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="74.9871"
        r="1.42021"
        transform="rotate(180 26.4157 74.9871)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="62.4892"
        r="1.42021"
        transform="rotate(180 26.4157 62.4892)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="38.3457"
        r="1.42021"
        transform="rotate(180 26.4157 38.3457)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="13.634"
        r="1.42021"
        transform="rotate(180 26.4157 13.634)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="50.2754"
        r="1.42021"
        transform="rotate(180 26.4157 50.2754)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="26.1319"
        r="1.42021"
        transform="rotate(180 26.4157 26.1319)"
        fill="fill-current"
      />
      <circle
        cx="26.4157"
        cy="1.4202"
        r="1.42021"
        transform="rotate(180 26.4157 1.4202)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="87.4849"
        r="1.42021"
        transform="rotate(180 13.9177 87.4849)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="74.9871"
        r="1.42021"
        transform="rotate(180 13.9177 74.9871)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="62.4892"
        r="1.42021"
        transform="rotate(180 13.9177 62.4892)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="38.3457"
        r="1.42021"
        transform="rotate(180 13.9177 38.3457)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="13.634"
        r="1.42021"
        transform="rotate(180 13.9177 13.634)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="50.2754"
        r="1.42021"
        transform="rotate(180 13.9177 50.2754)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="26.1319"
        r="1.42021"
        transform="rotate(180 13.9177 26.1319)"
        fill="fill-current"
      />
      <circle
        cx="13.9177"
        cy="1.42019"
        r="1.42021"
        transform="rotate(180 13.9177 1.42019)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="87.4849"
        r="1.42021"
        transform="rotate(180 1.41963 87.4849)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="74.9871"
        r="1.42021"
        transform="rotate(180 1.41963 74.9871)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="62.4892"
        r="1.42021"
        transform="rotate(180 1.41963 62.4892)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="38.3457"
        r="1.42021"
        transform="rotate(180 1.41963 38.3457)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="13.634"
        r="1.42021"
        transform="rotate(180 1.41963 13.634)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="50.2754"
        r="1.42021"
        transform="rotate(180 1.41963 50.2754)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="26.1319"
        r="1.42021"
        transform="rotate(180 1.41963 26.1319)"
        fill="fill-current"
      />
      <circle
        cx="1.41963"
        cy="1.4202"
        r="1.42021"
        transform="rotate(180 1.41963 1.4202)"
        fill="fill-current"
      />
    </svg>
  ),
  facebook: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="fill-current"
      {...props}
    >
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
    </svg>
  ),
  youtube: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="fill-current"
      {...props}
    >
      <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
    </svg>
  ),
  linkedin: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="fill-current"
      {...props}
    >
      <circle cx="4.983" cy="5.009" r="2.188"></circle>
      <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
    </svg>
  ),
  graph: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 1600 480"
      {...props}
    >
      <g fillRule="evenodd">
        <path
          d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"
          opacity="0.5"
        ></path>
        <path d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z"></path>
      </g>
    </svg>
  ),
};
