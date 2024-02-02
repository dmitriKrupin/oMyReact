import Layout from "@/components/layout";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Head from "next/head";

const data = [
  {
    label: "АПС",
    value: "апс",
    desc: `АПС (Автоматическая Пожарная Сигнализация) — совокупность технических средств для обнаружения загорания, сообщения 
    о месте его возникновения и обработки сигнала, также процесс получения, обработки, передачи и представления информации 
    о пожаре в заданном виде с помощью данных технических средств. 
    В законодательстве ЕАЭС используется термин системы пожарной сигнализации.
    Пожарная сигнализация являются разновидностью измерительных информационных систем, включает 
    в себя измерительные устройства и средства обработки информации. 
    В отличие от большинства измерительных систем, установки пожарной сигнализации определяют 
    не количественное значение контролируемого параметра, 
    а лишь его отклонение в сторону больше допустимой. 
    Обработка результатов сводится в основном к получению данных 
    о месте возникновения пожароопасной ситуации. 
    Требования к быстродействию систем являются крайне жесткими наряду 
    с почти полным отсутствием требований к накоплению информации.`,
  },
  {
    label: "СОУЭ",
    value: "соуэ",
    desc: `СОУЭ (Система Оповещения и Управления Эвакуацией людей при пожаре) — комплекс организационных мероприятий и технических средств, 
    предназначенных для своевременной передачи информации о возникновении пожара и путях эвакуации, а также для обеспечения безопасной 
    эвакуации людей при пожаре путём включения технических средств, предотвращения паники. СОУЭ приводится в действие командным импульсом 
    автоматических установок системы обнаружения пожара или диспетчером по сигналам автоматических установок системы обнаружения пожара (полуавтоматическое управление).
    Ложное срабатывание СОУЭ может привести к нарушению жизнедеятельности большого количества людей, находящихся в здании, что само по себе является чрезвычайной ситуацией.
    В СССР до 1985 года требовалось оснащать объекты средствами извещения или сигнализации о пожаре, в дальнейшем формулировка сменилась на оповещение людей и (или) сигнализацией о пожаре.`,
  },
  {
    label: "АППЗ",
    value: "аппз",
    desc: `АППЗ (Автоматическая ПротивоПожарная Защита) — это комплекс взаимосвязанных инженерно-технических средств, предназначенный 
    для обеспечения пожарной безопасности зданий и помещений в автоматическом режиме. 
    Пожарной автоматикой оборудуют здания и помещения с повышенной пожарной опасностью. 
    Средства пожарной автоматики предназначены для автоматического обнаружения пожара, оповещения о нём людей и управления их эвакуацией, 
    автоматического пожаротушения и дымоудаления, управления инженерным и технологическим оборудованием зданий и объектов.`,
  },
  {
    label: "СОТ",
    value: "сот",
    desc: `СОТ (Система Охранного Телевидения или видеонаблюдения) — совокупность электронных устройств, предназначенных 
    для ведения непрерывного наблюдения и записи видеоинформации об обстановке в той или иной части объекта, 
    что необходимо для обеспечения безопасности и осуществления контроля за деятельностью сотрудников.`,
  },
  {
    label: "СКУД",
    value: "скуд",
    desc: `СКУД (Система Контроля и Управления Доступом) (англ. Physical Access Control System, PACS) — совокупность программно-аппаратных технических 
    средств контроля и средств управления, имеющих целью ограничение и регистрацию входа-выхода объектов (людей, транспорта) на заданной территории 
    через «точки прохода»: двери, ворота, КПП.
    Основная задача — управление доступом на заданную территорию (кого пускать, в какое время и на какую территорию), включая также:
    ограничение доступа на заданную территорию;
    идентификацию лица, имеющего доступ на заданную территорию.
    Дополнительные задачи:
    учёт рабочего времени;
    расчет заработной платы (при интеграции с системами бухгалтерского учёта);
    ведение базы персонала / посетителей;
    интеграция с системой безопасности, например:
    с системой видеонаблюдения для совмещения архивов событий систем, передачи системе видеонаблюдения 
    извещений о необходимости стартовать запись, повернуть камеру для записи последствий зафиксированного подозрительного события;
    с системой охранной сигнализации (СОС), например, для ограничения доступа в помещения, стоящие на охране, 
    или для автоматического снятия и постановки помещений на охрану.
    с системой пожарной сигнализации (СПС) для получения информации о состоянии пожарных извещателей, 
    автоматического разблокирования эвакуационных выходов и закрывания противопожарных дверей в случае пожарной тревоги.`,
  },
  {
    label: "Домофон",
    value: "домофон",
    desc: `Домофон (под этим чаще всего подразумевается домофонная система) — электронная система, состоящая из устройств, 
    передающих сигнал от вызывного блока к переговорному устройству.
    Домофонная система является разновидностью систем контроля и управления доступа (СКУД). Может быть оборудована автоматически запирающими устройствами (АЗУ) 
    как электромеханического, так и электронного типа. По способу передачи связи: проводной или по радиосигналу.
    Наиболее сложные по оснащению домофоны служат для обеспечения безопасности проживающих граждан и сохранности их имущества и устанавливаются на подъезды многоквартирных домов. 
    Современные многоквартирные домофоны оснащены следующими устройствами и функциями:
    Аудио- и видеосвязь вызывного блока на подъезде с переговорным устройством в квартире.
    Подключение АЗУ к входной двери.
    Постановка систем охранной и пожарной сигнализаций с выводом на пульт МВД или МЧС.
    Экстренный вызов с переговорного устройства службы 112.
    Обеспечение связи с вызывной панелью служб 112, МЧС, МВД, Скорой помощи, диспетчерской и т. д.
    Голосовое информирование от служб МЧС и УК ЖКХ как через вызывную панель, так и через переговорные устройства.
    Ведение мониторинга с системой распознавания лиц через систему видеонаблюдения в вызывном блоке.
    Системы домофон постоянно совершенствуются под конкретные задачи и требования заказчиком, 
    и на сегодняшний день представляют собой многофункциональную микропроцессорную систему с блочным добавлением той или иной функции. 
    Сертификации для монтажа данных систем не требуется. Также до сих пор нет единого наименования: домофон, система домофон, ПЗУ и т. д.`,
  },
  {
    label: "ОС",
    value: "ос",
    desc: `ОС (Охранная Сигнализация) — совокупность технических средств для обнаружения проникновения (или попытки) 
    и подачи сигналов оповещения и извещения. Сигналы делятся на тревожные и служебные. 
    Тревожный сигнал содержит информацию о проникновении, служебные — о "взятии" под охрану, "снятии" с охраны и другую.`,
  },
  {
    label: "СКС",
    value: "скс",
    desc: `СКС (Структурированная Кабельная Система) – это комплекс кабельных магистралей предприятия, 
    который объединяет множество телекоммутационных сервисов различного назначения, передающих сигналы всех типов – текстовые, голосовые, видео, мультимедийные… 
    По сути это информационный «скелет» здания.`,
  },
  {
    label: "ЛВС",
    value: "лвс",
    desc: `ЛВС (Локальная Вычислительная Сеть) (англ. Local Area Network, LAN) — компьютерная сеть, покрывающая обычно относительно небольшую территорию 
    или небольшую группу зданий (дом, офис, фирму, институт). Является частью СКС (Структурированной кабельной системы)`,
  },
  {
    label: "АСДУ",
    value: "асду",
    desc: `АСДУ (Автоматизированная Система Диспетчерского Управления) — система управления технологическим процессом, 
    предназначена для контроля и управления режимами работы оборудования объекта автоматизации.
    Диспетчеризации подлежат следующие инженерные системы:
    Вентиляция и кондиционирование (ОВ).
    теплоснабжение (ИТП, ЦТП);
    холодоснабжение (ХС);
    холодильные машины (Чиллеры);
    насосные станции (ВК);
    электроснабжение;
    освещение;
    прочие инженерные системы.`,
  },
  {
    label: "РАСЦО",
    value: "расцо",
    desc: `РАСЦО (Региональная Автоматизированная Система Централизованного Оповещения) предназначена для обеспечения своевременного доведения информации 
    и сигналов оповещения до органов управления, сил и средств гражданской обороны, Санкт-Петербургской территориальной подсистемы единой государственной 
    системы предупреждения и ликвидации чрезвычайных ситуаций и населения Санкт-Петербурга об опасностях, 
    возникающих при ведении военных действий или вследствие этих действий, а также угрозе возникновения 
    или возникновении чрезвычайных ситуаций природного и техногенного характера.
    Основной задачей РАСЦО является обеспечение доведения сигналов оповещения и экстренной информации до населения Санкт-Петербурга. 
    Решение на задействование РАСЦО принимает Губернатор Санкт-Петербурга. Порядок использования РАСЦО строго регламентирован 
    и утвержден соответствующим постановлением Правительства Санкт-Петербурга.`,
  },
  {
    label: "РФ",
    value: "рф",
    desc: `РФ (РадиоФикация) - это система вещания, в которой звук передается за счет электрических колебаний, которые распространяются по радиотрансляционным сетям. 
    Таким образом, радиофикация зданий – целый комплекс работ, в который входит разводка для трех программной сети, а также ее монтаж и последующий доступ к сети вещания.`,
  },
  {
    label: "ЧС",
    value: "чс",
    desc: `ЧС (Система Часофикации) представляет собой совокупность технических средств, с помощью которых можно создать систему единого времени на предприятии. 
    Это синронизированная сеть, в составе которой первичные ведущие часы, и ведомые вторичные - могут устанавливаться как стрелочные, так и цифровые вторичные часы.
    `,
  },
];

export default function ProjectsPage() {
  return (
    <Layout home>
      <Head>
        <title>{"K-12.PRO | База знаний"}</title>
      </Head>
      <Tabs value="апс" orientation="vertical">
        <TabsHeader className="w-15 md:w-32">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="py-0 text-xs md:text-base"
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Layout>
  );
}
