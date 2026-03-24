import { useState } from "react";
import Icon from "@/components/ui/icon";

const RULES_DATA = [
  {
    id: "2",
    title: "Правила регистрации",
    icon: "UserCheck",
    color: "#4CAF50",
    rules: [
      {
        num: "2.1",
        text: "Никнейм пользователя должен быть корректным. Некорректным можно назвать любой ник, нарушающий закреплённые правила.",
        punishment: "блокировка",
        subrules: [
          { num: "2.1.1", text: "Никнейм, похожий на никнейм высшей Администрации (исключение – никнеймы ютуберов проекта)." },
          { num: "2.1.2", text: "Никнейм сексуального, аморального содержания (название половых органов, процессов и пр.)." },
          { num: "2.1.3", text: "Никнейм, оскорбляющий никнейм другого игрока." },
          { num: "2.1.4", text: "Никнейм, содержащий названия запрещённых ПО (пример: Celestial777)." },
          { num: "2.1.5", text: "Никнейм, содержащий грубые матерные слова." },
          { num: "2.1.6", text: "Никнейм, не носящий определённого смысла, или являющийся набором символов/цифр — от 8 символов (исключение — аккаунты с платной услугой)." },
        ]
      },
      {
        num: "2.2",
        text: "При покупке платных дополнительных возможностей (групп), кейсов, рилликов, предоставленный системой чек необходимо сохранить.",
        punishment: null,
        subrules: []
      },
      {
        num: "2.3",
        text: "Безопасность аккаунта не гарантируется проектом. Процедура по обеспечению безопасности полностью лежит на плечах игрока. В случае утери аккаунта, администрация вправе отказать в восстановлении, а также обнулить и заблокировать аккаунт, если с него нанесён серьёзный вред проекту.",
        punishment: null,
        subrules: []
      },
    ]
  },
  {
    id: "4",
    title: "Правила чата",
    icon: "MessageSquare",
    color: "#FFD700",
    rules: [
      {
        num: "4.1",
        text: "Запрещено флудить, отправлять больше 2-ух похожих по смыслу или одинаковых сообщений подряд (2 сообщения можно, 3 нельзя) за одну минуту.",
        punishment: "мут 4ч",
        subrules: [
          { num: "4.1.1", text: "Запрещено согласовывать с другими игроками или использовать свои твинки для отправки одного и того же сообщения в короткий промежуток времени, иными словами — обходить наказание за флуд, используя третьи аккаунты. [мут каждому участнику на 4 часа]" },
          { num: "4.1.2", text: "Запрещено использовать объявления для обхода наказания за флуд (использовать 2 /bc и сообщение в глобал, или наоборот — 2 сообщения и 1 /bc). [мут на 6 часов]" },
        ]
      },
      {
        num: "4.2",
        text: "Запрещено флудить символами, т.е. использовать комбинации бессмысленных символов, по типу «!!!!!!!!!!!!!!!!!!», или же смеха. [мут на 4 часа, более 10 символов]",
        punishment: "мут 4ч",
        subrules: [
          { num: "4.2.1", text: "Злоупотребление капсом, если в предложении (от 3-х слов) более 50% написано в Caps'е. [мут на 4 часа]" },
        ]
      },
      {
        num: "4.3",
        text: "Запрещено организовывать флуд опросами, по типу «отправьте + в чат». Исключение: просьба приютить/продать/обменять ресурсы, математические примеры (не более 3-х за 5 минут), сообщения типа «кто в клан/дуэль/выживать вместе + в чат». [мут на 4 часа]",
        punishment: "мут 4ч",
        subrules: [
          { num: "4.3.1", text: "Если при организации флуда на ваше сообщение ответило 6 и более человек — вам выдаётся мут на 6 часов, а всем, кто отреагировал — мут на 4 часа." },
        ]
      },
      {
        num: "4.4",
        text: "Неадекватное поведение, чрезмерные оскорбления и агрессия. [мут на 3 часа / 12 часов]",
        punishment: "мут 3-12ч",
        subrules: [
          { num: "4.4.1", text: "Оскорбления, унижения, угрозы к участникам сервера, игрокам (даже без указания конкретного игрока; упоминание/затрагивание расы — исключение). [мут на 4 часа]" },
          { num: "4.4.2", text: "Злоупотребление нецензурной лексикой. [мут на 2 / 4 часа]" },
          { num: "4.4.3", text: "Аморальное поведение, темы для совершеннолетних. [мут на 3 часа]" },
          { num: "4.4.4", text: "Призывы к суициду. [мут на 6 часов]" },
          { num: "4.4.5", text: "Оскорбление проекта, унижение проекта, оскорбительные названия. Любой вид чата. [бан на 30 дней]" },
          { num: "4.4.6", text: "Публичная критика проекта в общем чате. [мут на 3 дня]" },
        ]
      },
      {
        num: "4.5",
        text: "Выпрашивание снятия/выдачи наказаний у Администрации. Выпрашивание у MrDomer — исключение. [мут на 2 часа]",
        punishment: "мут 2ч",
        subrules: [
          { num: "4.5.1", text: "Выпрашивание ресурсов у персонала проекта. Выпрашивание у MrDomer — исключение. [мут на 1 час]" },
        ]
      },
      {
        num: "4.6",
        text: "Дезинформация игроков проекта неофициальной информацией, внутриигровой информацией. «Скоро вайп» — исключение. [мут на 12 часов / 4 дня]",
        punishment: "мут 12ч–4д",
        subrules: [
          { num: "4.6.1", text: "Вне-игровой обман игроков. Например, сочетаниями клавиш Alt+F4 или зажатием клавиш F3+C. [мут на 6 часов]" },
        ]
      },
      {
        num: "4.7",
        text: "Запрещено упоминание сторонних проектов, ресурсов, групп, соцсетей и подобного. [мут 1 день] Обход правила: [мут на 3 дня]",
        punishment: "мут 1-3д",
        subrules: [
          { num: "4.7.1", text: "Любое упоминание Discord/Telegram-контактов. Исключение: личные сообщения, локальный чат с модератором. [бан на 2 дня]" },
          { num: "4.7.2", text: "Реклама сторонних проектов (обход данного правила). Любой вид чата. [мут на 60 дней]" },
          { num: "4.7.3", text: "Реклама в личных сообщениях, попытка обойти наказание в глобальном чате. [бан на 60 дней]" },
          { num: "4.7.4", text: "Распространение вредоносных ссылок (скримеры, стиллеры, платные краткие ссылки). [бан на 14 дней]" },
        ]
      },
      {
        num: "4.8",
        text: "Оскорбление родителей, некорректное обращение к родителям любого игрока, оскорбительные упоминания. [мут на 5 дней за упоминание, на 10/15 дней — за оскорбление]",
        punishment: "мут 5-15д",
        subrules: [
          { num: "4.8.1", text: "Оскорбление своих родителей. [мут 5 дней]" },
        ]
      },
      {
        num: "4.9",
        text: "Затрагивание политики, политическая агитация. [бан на 3 дня / 7 дней] или [мут на 2 дня]",
        punishment: "бан 3-7д",
        subrules: []
      },
      {
        num: "4.10",
        text: "Выдача себя за администрацию проекта. [бан на 3 дня]",
        punishment: "бан 3д",
        subrules: [
          { num: "4.10.1", text: "Угрозы баном/киком/мутом. [бан на 12 часов]" },
        ]
      },
      {
        num: "4.11",
        text: "Оскорбление модерации и администрации. Любой вид чата. [бан на 5 / 10 / 15 дней]",
        punishment: "бан 5-15д",
        subrules: [
          { num: "4.11.1", text: "Оскорбление родных администрации. Любой вид чата. [бан на 20 дней]" },
          { num: "4.11.2", text: "Шутки или рофлы в сторону администрации, состава проекта. [бан на 2 дня]" },
          { num: "4.11.3", text: "Неуважительное/неадекватное общение с администрацией. [мут на 12 часов]" },
          { num: "4.11.4", text: "Угроза администрации снятием, угроза наказанием. [мут на 4 часа]" },
        ]
      },
      {
        num: "4.12",
        text: "Оскорбление ютуберов проекта. Любой вид чата. [бан от 1 дня / 5 дней]",
        punishment: "бан 1-5д",
        subrules: [
          { num: "4.12.1", text: "Шутки или рофлы в сторону ютуберов проекта. [бан на 1 день]" },
          { num: "4.12.2", text: "Неадекватное общение с ютуберами проекта. [мут на 6 часов]" },
        ]
      },
      {
        num: "4.13",
        text: "Пропаганда нацизма/расизма, табакокурения, наркотиков, оружия, терроризма и т.д. [бан на 7 дней]",
        punishment: "бан 7д",
        subrules: []
      },
      {
        num: "4.14",
        text: "Распространение личных данных игроков (доксинг, сватинг). Угрозы также сюда относятся. [бан на 30 дней]",
        punishment: "бан 30д",
        subrules: [
          { num: "4.14.1", text: "Доксинг, сватинг и подобные нарушения в сторону сотрудника сервера. [отключение аккаунта]" },
        ]
      },
      {
        num: "4.15",
        text: "Провокация игроков на нарушение правил. [бан от 12 часов / 2 дня / 4 дня]",
        punishment: "бан 12ч–4д",
        subrules: []
      },
      {
        num: "4.16",
        text: "Любое упоминание денежных операций с реальной валютой любой размерности. [мут на 2 дня]",
        punishment: "мут 2д",
        subrules: []
      },
      {
        num: "4.17",
        text: "Музыка/посторонние звуки (кроме голоса игрока) в голосовой чат. [мут на 6 часов]",
        punishment: "мут 6ч",
        subrules: []
      },
    ]
  },
  {
    id: "5",
    title: "Запрещённое ПО и читы",
    icon: "ShieldOff",
    color: "#FF4444",
    rules: [
      {
        num: "5.2",
        text: "Использование вредоносного, читерского ПО, получение преимущества над игроками. [бан на 50 дней] + снос основного дома + возможное отключение аккаунта (на усмотрение администрации).",
        punishment: "бан 50д",
        subrules: [
          { num: "5.2.1", text: "Совместная игра с игроком, нарушившим пункт 5.2. [бан на 47 дней]" },
          { num: "5.2.2", text: "Признание на проверке. [бан на 46 дней]" },
          { num: "5.2.3", text: "Признание в наличии читов (в любом виде чата). [бан на 10 дней]" },
          { num: "5.2.4", text: "Обход блокировки аккаунта — вход с любого аккаунта при уже имеющейся блокировке. Любые попытки обойти это правило квалифицируются как обход бана. [бан на 70 дней]" },
          { num: "5.2.5", text: "Читы удалены менее 14 дней назад. [бан на 50 дней]" },
          { num: "5.2.5.1", text: "Запрещено хранить у себя читы. [бан на 50 дней]" },
          { num: "5.2.6", text: "Использование Auto-копателей или лесорубов. [бан на 5 дней]" },
          { num: "5.2.7", text: "Использование ботов, макросов, плагинов, позволяющих автоматизировать сложные игровые процессы. [бан на 15 дней] Пример: бот казино с фармом валюты. [бан на 14 дней]" },
          { num: "5.2.8", text: "Неадекватное поведение на проверке: фейк-папки с названиями читов, шутки в сторону администрации, попытка выпросить разбан, вопросы не по теме. [бан на 50 дней]" },
          { num: "5.2.9", text: "Использование виртуальных машин при проверке, манипуляции с обязательными программами, блокировка доступа к локальным дискам. [бан на 50 дней]" },
          { num: "5.2.10", text: "Использование макросов, запрещённых модов, кликеров (кроме фармилок). [бан на 5 / 7 / 15 / 30 / 50 дней]" },
          { num: "5.2.11", text: "Использование .bat (батников) на чистку. [бан на 50 дней]" },
          { num: "5.2.11.1", text: "Хранение .bat (батников) на очистку. [бан на 20 дней]" },
        ]
      },
      {
        num: "5.3",
        text: "Список запрещённых модов (бан на 5–50 дней в зависимости от мода): ElytraSwap, ArmorHotSwap, Slippery Mod, StepUp Mod, AFK-Fish Mod, InvMove, Inventory Totem, TopkaAutoBuy v1/v2, GoProne, CleanCut, Grass Bypass, TopkaCasino, моды изменяющие хитбоксы (стойки и т.д.), а также любые модификации, являющиеся интерпретацией чит-функции.",
        punishment: "бан 5-50д",
        subrules: []
      },
    ]
  }
];

const PUNISHMENTS_DATA = [
  { type: "БАН", duration: "Навсегда", reason: "Некорректный никнейм — первичная регистрация (2.1)", badge: "punishment-ban" },
  { type: "ВАРН", duration: "1 предупреждение", reason: "Некорректный никнейм — сменённый аккаунт (2.1)", badge: "punishment-warn" },
  { type: "МУТ", duration: "4 часа", reason: "Флуд в чате (4.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Флуд через твинки / чужие аккаунты (4.1.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "6 часов", reason: "Обход мута через объявления /bc (4.1.2)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Флуд символами, смех, бессмысленные комбинации (4.2)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Злоупотребление капсом >50% в предложении (4.2.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Организация флуда опросами (4.3)", badge: "punishment-mute" },
  { type: "МУТ", duration: "6 часов / 4 часа", reason: "Флуд-опрос с 6+ ответившими — организатору 6ч, участникам 4ч (4.3.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "3–12 часов", reason: "Неадекватное поведение, оскорбления, агрессия (4.4)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Оскорбления/угрозы участникам сервера (4.4.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "2–4 часа", reason: "Злоупотребление нецензурной лексикой (4.4.2)", badge: "punishment-mute" },
  { type: "МУТ", duration: "3 часа", reason: "Аморальное поведение, темы 18+ (4.4.3)", badge: "punishment-mute" },
  { type: "МУТ", duration: "6 часов", reason: "Призывы к суициду (4.4.4)", badge: "punishment-mute" },
  { type: "БАН", duration: "30 дней", reason: "Оскорбление/унижение проекта (4.4.5)", badge: "punishment-ban" },
  { type: "МУТ", duration: "3 дня", reason: "Публичная критика проекта в общем чате (4.4.6)", badge: "punishment-mute" },
  { type: "МУТ", duration: "2 часа", reason: "Выпрашивание снятия/выдачи наказаний (4.5)", badge: "punishment-mute" },
  { type: "МУТ", duration: "1 час", reason: "Выпрашивание ресурсов у персонала (4.5.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "12 часов – 4 дня", reason: "Дезинформация игроков (4.6)", badge: "punishment-mute" },
  { type: "МУТ", duration: "6 часов", reason: "Вне-игровой обман (Alt+F4, F3+C и пр.) (4.6.1)", badge: "punishment-mute" },
  { type: "МУТ", duration: "1–3 дня", reason: "Упоминание сторонних проектов/соцсетей (4.7)", badge: "punishment-mute" },
  { type: "БАН", duration: "2 дня", reason: "Упоминание Discord/Telegram-контактов (4.7.1)", badge: "punishment-ban" },
  { type: "МУТ", duration: "60 дней", reason: "Реклама сторонних проектов (4.7.2)", badge: "punishment-mute" },
  { type: "БАН", duration: "60 дней", reason: "Реклама в личных сообщениях / обход бана в глобале (4.7.3)", badge: "punishment-ban" },
  { type: "БАН", duration: "14 дней", reason: "Вредоносные ссылки (скримеры, стиллеры) (4.7.4)", badge: "punishment-ban" },
  { type: "МУТ", duration: "5–15 дней", reason: "Оскорбление родителей игроков (4.8)", badge: "punishment-mute" },
  { type: "МУТ", duration: "5 дней", reason: "Оскорбление своих родителей (4.8.1)", badge: "punishment-mute" },
  { type: "БАН", duration: "3–7 дней", reason: "Политика, политическая агитация (4.9)", badge: "punishment-ban" },
  { type: "БАН", duration: "3 дня", reason: "Выдача себя за администрацию (4.10)", badge: "punishment-ban" },
  { type: "БАН", duration: "12 часов", reason: "Угрозы баном/киком/мутом (4.10.1)", badge: "punishment-ban" },
  { type: "БАН", duration: "5–15 дней", reason: "Оскорбление администрации/модерации (4.11)", badge: "punishment-ban" },
  { type: "БАН", duration: "20 дней", reason: "Оскорбление родных администрации (4.11.1)", badge: "punishment-ban" },
  { type: "БАН", duration: "2 дня", reason: "Рофлы/шутки в сторону администрации (4.11.2)", badge: "punishment-ban" },
  { type: "МУТ", duration: "12 часов", reason: "Неуважительное общение с администрацией (4.11.3)", badge: "punishment-mute" },
  { type: "МУТ", duration: "4 часа", reason: "Угроза администрации снятием/наказанием (4.11.4)", badge: "punishment-mute" },
  { type: "БАН", duration: "1–5 дней", reason: "Оскорбление ютуберов проекта (4.12)", badge: "punishment-ban" },
  { type: "БАН", duration: "1 день", reason: "Рофлы/шутки в сторону ютуберов (4.12.1)", badge: "punishment-ban" },
  { type: "МУТ", duration: "6 часов", reason: "Неадекватное общение с ютуберами (4.12.2)", badge: "punishment-mute" },
  { type: "БАН", duration: "7 дней", reason: "Пропаганда нацизма, расизма, наркотиков, терроризма (4.13)", badge: "punishment-ban" },
  { type: "БАН", duration: "30 дней", reason: "Доксинг, сватинг, распространение личных данных (4.14)", badge: "punishment-ban" },
  { type: "ОТКЛ", duration: "Отключение аккаунта", reason: "Доксинг/сватинг сотрудника сервера (4.14.1)", badge: "punishment-ban" },
  { type: "БАН", duration: "12ч – 4 дня", reason: "Провокация игроков на нарушение правил (4.15)", badge: "punishment-ban" },
  { type: "МУТ", duration: "2 дня", reason: "Упоминание денежных операций с реальной валютой (4.16)", badge: "punishment-mute" },
  { type: "МУТ", duration: "6 часов", reason: "Музыка/посторонние звуки в голосовой чат (4.17)", badge: "punishment-mute" },
  { type: "БАН", duration: "50 дней", reason: "Использование читерского ПО (5.2)", badge: "punishment-ban" },
  { type: "БАН", duration: "70 дней", reason: "Обход блокировки аккаунта (5.2.4)", badge: "punishment-ban" },
  { type: "БАН", duration: "5–50 дней", reason: "Использование запрещённых модов (5.2.10 / 5.3)", badge: "punishment-ban" },
];

const MCBlock = ({ color, char, size = 32 }: { color: string; char?: string; size?: number }) => (
  <div
    className="mc-block floating-block flex items-center justify-center font-pixel text-white select-none"
    style={{ width: size, height: size, background: color, fontSize: size / 3.5 }}
  >
    {char}
  </div>
);

export default function Index() {
  const [activePage, setActivePage] = useState<"home" | "rules" | "punishments">("home");
  const [expandedRules, setExpandedRules] = useState<Record<string, boolean>>({});

  const toggleRule = (id: string) => {
    setExpandedRules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getPunishmentBadge = (p: string | null) => {
    if (!p) return null;
    if (p.includes("блок") || p.includes("бан")) return "punishment-ban";
    if (p.includes("мут")) return "punishment-mute";
    return "punishment-warn";
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--mc-bg)" }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 mc-panel" style={{ borderBottom: "2px solid var(--mc-border)" }}>
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
          <button
            onClick={() => setActivePage("home")}
            className="font-pixel text-xs md:text-sm tracking-wider"
            style={{ color: "var(--mc-green)", textShadow: "0 0 10px rgba(76,175,80,0.5)" }}
          >
            MULTI<span style={{ color: "#FFD700" }}>WORLD</span>
          </button>
          <div className="flex items-center gap-1">
            <button onClick={() => setActivePage("home")} className={`nav-link ${activePage === "home" ? "active" : ""}`}>
              Главная
            </button>
            <button onClick={() => setActivePage("rules")} className={`nav-link ${activePage === "rules" ? "active" : ""}`}>
              Правила
            </button>
            <button onClick={() => setActivePage("punishments")} className={`nav-link ${activePage === "punishments" ? "active" : ""}`}>
              Наказания
            </button>
          </div>
        </div>
      </nav>

      {/* HOME PAGE */}
      {activePage === "home" && (
        <div>
          <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-8 opacity-30 flex gap-2">
                <MCBlock color="#4CAF50" size={28} />
                <MCBlock color="#2d7a31" size={28} />
                <MCBlock color="#8B6340" size={28} />
              </div>
              <div className="absolute top-32 right-12 opacity-20 flex gap-2">
                <MCBlock color="#7F7F7F" size={24} />
                <MCBlock color="#4CAF50" size={24} />
              </div>
              <div className="absolute bottom-20 left-16 opacity-25 flex gap-3">
                <MCBlock color="#FFD700" size={20} />
                <MCBlock color="#4CAF50" size={20} />
                <MCBlock color="#2d7a31" size={20} />
                <MCBlock color="#8B6340" size={20} />
              </div>
              <div className="absolute bottom-40 right-8 opacity-15">
                <MCBlock color="#4CAF50" size={40} />
              </div>
              <div className="absolute inset-0" style={{
                background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)"
              }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center w-full">
              <div className="flex justify-center gap-3 mb-12">
                <MCBlock color="#4CAF50" char="M" size={40} />
                <MCBlock color="#2d7a31" char="W" size={40} />
                <MCBlock color="#1a4a1a" char="✦" size={40} />
                <MCBlock color="#2d7a31" char="W" size={40} />
                <MCBlock color="#4CAF50" char="M" size={40} />
              </div>

              <h1
                className="font-pixel hero-title-glow mb-4"
                style={{ fontSize: "clamp(24px, 6vw, 64px)", color: "#4CAF50", lineHeight: 1.4, letterSpacing: "0.05em" }}
              >
                MULTIWORLD
              </h1>

              <div className="pixel-divider max-w-xs mx-auto my-6" />

              <p className="font-pixel mb-3" style={{ color: "#FFD700", fontSize: "clamp(8px, 2vw, 14px)", letterSpacing: "0.1em" }}>
                ОФИЦИАЛЬНЫЕ ПРАВИЛА СЕРВЕРА
              </p>

              <p className="mb-10 max-w-lg mx-auto" style={{ color: "#a0d4a0", fontSize: "15px", lineHeight: 1.7 }}>
                Добро пожаловать на сервер MULTIWORLD. Ознакомься с правилами, чтобы игра была честной и приятной для всех игроков.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <button className="mc-btn" onClick={() => setActivePage("rules")}>
                  📜 ПРАВИЛА
                </button>
                <button
                  className="mc-btn"
                  style={{ background: "#FFD700", color: "#1a1a00", boxShadow: "inset -3px -3px 0 #b8860b, inset 3px 3px 0 #fff176" }}
                  onClick={() => setActivePage("punishments")}
                >
                  ⚔️ НАКАЗАНИЯ
                </button>
              </div>

              <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[
                  { label: "РАЗДЕЛОВ", val: "2+" },
                  { label: "ПРАВИЛ", val: "9+" },
                  { label: "СЕРВЕР", val: "24/7" },
                ].map(s => (
                  <div key={s.label} className="mc-panel py-4 px-2 text-center">
                    <div className="font-pixel text-lg mb-1" style={{ color: "#4CAF50" }}>{s.val}</div>
                    <div className="font-pixel" style={{ color: "#666", fontSize: "7px" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* RULES PAGE */}
      {activePage === "rules" && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-2 mb-6">
              <MCBlock color="#4CAF50" size={24} />
              <MCBlock color="#2d7a31" size={24} />
              <MCBlock color="#4CAF50" size={24} />
            </div>
            <h2 className="font-pixel mb-3" style={{ color: "#4CAF50", fontSize: "clamp(14px, 3vw, 22px)", textShadow: "2px 2px 0 #1a4a1a" }}>
              ПРАВИЛА СЕРВЕРА
            </h2>
            <p style={{ color: "#a0d4a0", fontSize: "13px" }}>Незнание правил не освобождает от ответственности</p>
            <div className="pixel-divider max-w-sm mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {RULES_DATA.map(section => (
              <div key={section.id} className="mc-panel p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="mc-block flex items-center justify-center" style={{ width: 40, height: 40, background: section.color, flexShrink: 0 }}>
                    <Icon name={section.icon} fallback="Shield" size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-pixel" style={{ color: "#666", fontSize: "9px" }}>РАЗДЕЛ {section.id}</span>
                    <h3 className="font-pixel mt-1" style={{ color: section.color, fontSize: "12px" }}>{section.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {section.rules.map(rule => (
                    <div key={rule.num}>
                      <div
                        className="flex items-start gap-3 cursor-pointer p-3"
                        style={{ background: "rgba(76,175,80,0.03)" }}
                        onClick={() => rule.subrules.length > 0 && toggleRule(rule.num)}
                      >
                        <span className="rule-number">{rule.num}</span>
                        <div className="flex-1">
                          <p style={{ color: "#d4e8d4", fontSize: "14px", lineHeight: 1.6 }}>{rule.text}</p>
                          {rule.punishment && (
                            <div className="mt-2">
                              <span className={`punishment-badge ${getPunishmentBadge(rule.punishment)}`}>
                                ⚔ {rule.punishment.toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>
                        {rule.subrules.length > 0 && (
                          <Icon
                            name={expandedRules[rule.num] ? "ChevronUp" : "ChevronDown"}
                            size={16}
                            className="mt-1"
                            style={{ color: "#4CAF50", flexShrink: 0 } as React.CSSProperties}
                          />
                        )}
                      </div>

                      {rule.subrules.length > 0 && expandedRules[rule.num] && (
                        <div className="mt-2 space-y-2 pl-4">
                          {rule.subrules.map(sub => (
                            <div key={sub.num} className="sub-rule py-2 pr-3">
                              <div className="flex items-start gap-3">
                                <span className="rule-number" style={{ fontSize: "7px", color: "#a0d4a0" }}>{sub.num}</span>
                                <p style={{ color: "#a0c0a0", fontSize: "13px", lineHeight: 1.6 }}>{sub.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="font-pixel" style={{ color: "#2d5a2d", fontSize: "8px" }}>
              <span className="blink">▮</span> КОНЕЦ ПРАВИЛ СЕРВЕРА MULTIWORLD
            </p>
          </div>
        </div>
      )}

      {/* PUNISHMENTS PAGE */}
      {activePage === "punishments" && (
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-2 mb-6">
              <MCBlock color="#8b1a1a" size={24} />
              <MCBlock color="#FF4444" size={24} />
              <MCBlock color="#8b1a1a" size={24} />
            </div>
            <h2 className="font-pixel mb-3" style={{ color: "#FF4444", fontSize: "clamp(14px, 3vw, 22px)", textShadow: "2px 2px 0 #4a0e0e" }}>
              СИСТЕМА НАКАЗАНИЙ
            </h2>
            <p style={{ color: "#e8a0a0", fontSize: "13px" }}>Нарушение правил влечёт соответствующие санкции</p>
            <div className="max-w-sm mx-auto mt-4" style={{
              height: 4,
              background: "repeating-linear-gradient(90deg, #FF4444 0,#FF4444 8px,#8b1a1a 8px,#8b1a1a 16px,#4a0e0e 16px,#4a0e0e 24px,#8b1a1a 24px,#8b1a1a 32px)"
            }} />
          </div>

          <div className="mc-panel p-4 mb-6 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <span className="punishment-badge punishment-mute">МУТ</span>
              <span style={{ color: "#a0a0a0", fontSize: "12px" }}>— ограничение чата</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="punishment-badge punishment-ban">БАН</span>
              <span style={{ color: "#a0a0a0", fontSize: "12px" }}>— блокировка аккаунта</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="punishment-badge punishment-warn">ВАРН</span>
              <span style={{ color: "#a0a0a0", fontSize: "12px" }}>— предупреждение</span>
            </div>
          </div>

          <div className="mc-panel overflow-hidden">
            <div className="px-6 py-3 font-pixel flex items-center gap-2" style={{
              background: "rgba(255,68,68,0.1)", borderBottom: "2px solid rgba(255,68,68,0.2)", fontSize: "10px", color: "#FF4444"
            }}>
              <Icon name="Shield" size={14} />
              ТАБЛИЦА НАРУШЕНИЙ
            </div>
            <div className="divide-y" style={{ borderColor: "rgba(76,175,80,0.1)" }}>
              {PUNISHMENTS_DATA.map((p, i) => (
                <div key={i} className="px-5 py-4 flex items-start gap-4 transition-colors hover:bg-white/5">
                  <div className="pt-0.5 flex-shrink-0">
                    <span className={`punishment-badge ${p.badge}`}>{p.type}</span>
                  </div>
                  <div className="flex-1">
                    <p style={{ color: "#d4e8d4", fontSize: "14px", lineHeight: 1.5 }}>{p.reason}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-pixel" style={{ color: "#FFD700", fontSize: "8px" }}>{p.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 mc-panel p-4">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#FFD700" } as React.CSSProperties} />
              <p style={{ color: "#a0a0a0", fontSize: "13px", lineHeight: 1.6 }}>
                Администрация оставляет за собой право ужесточить наказание в зависимости от тяжести нарушения и истории игрока. При повторных нарушениях санкции могут быть усилены.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 py-8" style={{ borderTop: "2px solid var(--mc-border)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-2 mb-3">
            <MCBlock color="#4CAF50" size={12} />
            <MCBlock color="#2d7a31" size={12} />
            <MCBlock color="#8B6340" size={12} />
            <MCBlock color="#7F7F7F" size={12} />
            <MCBlock color="#2d7a31" size={12} />
            <MCBlock color="#4CAF50" size={12} />
          </div>
          <p className="font-pixel" style={{ color: "#2d5a2d", fontSize: "7px" }}>
            © MULTIWORLD SERVER — ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </p>
        </div>
      </footer>
    </div>
  );
}