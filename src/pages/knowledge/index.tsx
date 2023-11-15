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
    desc: `СОУЭ (Система оповещения и управления эвакуацией людей при пожаре) — комплекс организационных мероприятий и технических средств, 
    предназначенных для своевременной передачи информации о возникновении пожара и путях эвакуации, а также для обеспечения безопасной 
    эвакуации людей при пожаре путём включения технических средств, предотвращения паники. СОУЭ приводится в действие командным импульсом 
    автоматических установок системы обнаружения пожара или диспетчером по сигналам автоматических установок системы обнаружения пожара (полуавтоматическое управление).
    Ложное срабатывание СОУЭ может привести к нарушению жизнедеятельности большого количества людей, находящихся в здании, что само по себе является чрезвычайной ситуацией.
    В СССР до 1985 года требовалось оснащать объекты средствами извещения или сигнализации о пожаре, в дальнейшем формулировка сменилась на оповещение людей и (или) сигнализацией о пожаре.`,
  },
  {
    label: "АППЗ",
    value: "аппз",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "СОТ",
    value: "сот",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "СКУД",
    value: "скуд",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "ОС",
    value: "ос",
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

export default function ProjectsPage() {
  return (
    <Layout home>
      <Head>
        <title>{"K-12.PRO | База знаний"}</title>
      </Head>
      <Tabs value="апс" orientation="vertical">
        <TabsHeader className="w-32">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Layout>
  );
}
