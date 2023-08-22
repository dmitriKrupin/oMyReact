import { Checkbox, Option, Select, Avatar } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function SecondStep() {
  const [accessEntrance, setAccessEntrance] = React.useState("");

  useEffect(() => {
    let value;
    value = localStorage.getItem("accessEntrance") || "";
    setAccessEntrance(value);
  }, []);

  const arrayOfAccessReader = [
    {
      id: 0,
      name: "Считыватель (белый)",
      model: "Matrix-II",
      readers: "EM-Marin",
      interface: "Dallas Touch Memory",
      manufacture: "Iron Logic",
      imageSrc:
        "https://shop.ironlogic.ru/sites/default/files/imagecache/product/mII.png",
    },
    {
      id: 1,
      name: "Считыватель (белый)",
      model: "ST-PR011EM-WT",
      readers: "EM-Marin",
      interface: "Wiegand 26",
      manufacture: "SMARTEC",
      imageSrc:
        "https://smartec-security.com/upload/iblock/2a5/ST-PR011EM-WT.jpg",
    },
    {
      id: 2,
      name: "Считыватель накладной антивандальный",
      model: "CP-Z2L",
      readers: "EM-Marin",
      interface: "Dallas Touch Memory || Wiegand 26",
      manufacture: "Iron Logic",
      imageSrc:
        "https://ironlogic.ru/il.nsf/img/ru_cpz2ln.jpg/$FILE/cpz2ln.jpg",
    },
    {
      id: 3,
      name: "Считыватель (серый)",
      model: "Proxy-2МА",
      readers: "MIFARE || EM-Marin || HID ProxCard II",
      interface:
        "Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II",
      manufacture: "НПВ Болид",
      imageSrc: "https://bolid.ru/files/341/532/c2_proxy_thumb1_0.jpeg",
    },
    {
      id: 4,
      name: "Считыватель (черная рамка)",
      model: "Proxy-3MA",
      readers: "MIFARE || EM-Marin || HID ProxCard II",
      interface:
        "Wiegand-26/37/44 || Dallas Touch Memory || RS-232 || ABA TRACK II",
      manufacture: "НПВ Болид",
      imageSrc:
        "https://bolid.ru/files/341/532/Proxy_3M_Proxy_3MA_aktiven_thumb3.png",
    },
    {
      id: 5,
      name: "Считыватель (белый)",
      model: "PERCo-IR13G",
      readers: "EM-Marin || HID ProxCard II",
      interface: "RS-485 (PERCo) || Wiegand-26/34/42/58",
      manufacture: "PERCo",
      imageSrc:
        "https://www.perco.ru/images/products/readers/IR19/IR19G.v2.jpg",
    },
  ];

  const arrayOfButtonEntrance = [
    {
      id: 0,
      name: "Вызывная видеопанель (серая) AHD 1080p",
      model: "iPanel 2 WG EM HD",
      readers: "EM-Marin",
      interface: "Wiegand 26",
      manufacture: "Tantos",
      imageSrc:
        "https://tantos.pro/images/cat-items/1469/ipanel-2-wg-em-hd_3.jpeg",
    },
    {
      id: 1,
      name: "Вызывная видеопанель (серая) 1000 ТВЛ",
      model: "CTV-D3002EM S",
      readers: "EM-Marin",
      interface: "Wiegand 26",
      manufacture: "CTV",
      imageSrc:
        "https://ctvcctv.ru/upload/image/catalog/Domofony/D3002EM_solo.jpg",
    },
    {
      id: 2,
      name: "Вызывная панель IP-видеодомофона (черно-серая) 2 Mp",
      model: "DS-KV6113-PE1",
      readers: "Mifare",
      interface: "Только с видеодомофоном",
      manufacture: "Hikvision",
      imageSrc: "https://hikvision.ru/media/product/201911//o3odjjxp.png",
    },
    {
      id: 3,
      name: "Вызывная панель IP-видеодомофона (черно-серая) 2 Mp",
      model: "DS-KV6103-PE1(С)",
      readers: "Без считывателя",
      interface: "Только с видеодомофоном",
      manufacture: "Hikvision",
      imageSrc:
        "https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000083/S000000129/S000000131/OFR002275/M000058900/images/DS-KV6103-PE1B_基线_门口机_正视图.png.thumb.319.319.png?f=webp",
    },
  ];

  const arrayOfVideoMonitor = [
    {
      id: 0,
      name: "Монитор видеодомофона (белая)",
      model: "Amelie",
      manufacture: "Tantos",
      imageSrc: "https://tantos.pro/images/cat-items/93/amelie.jpeg",
    },
    {
      id: 1,
      name: "Монитор видеодомофона (серый)",
      model: "CTV-M1703 S",
      manufacture: "CTV",
      imageSrc:
        "https://ctvcctv.ru/upload/image/catalog/Domofony/M1703_silver.jpg",
    },
    {
      id: 2,
      name: "Монитор IP-домофона (черно-черый)",
      model: "DS-KH6320-TE1",
      manufacture: "Hikvision",
      imageSrc: "https://hikvision.ru/media/product/201904//ginvlsv5.png",
    },
  ];

  const arrayOfCodePanel = [
    {
      id: 0,
      name: "Панель кодонаборная (черная, пластиковая)",
      model: "TS-KBD-EMF",
      readers: "MIFARE || EM-Marin",
      interface: "Wiegand 26/44",
      manufacture: "TANTOS",
      imageSrc:
        "https://tantos.pro/images/cat-items/1602/ts-kbd-emf-plastic.jpeg",
    },
    {
      id: 1,
      name: "Панель кодонаборная (серая, металлическая)",
      model: "TS-KBD-EM-IP66",
      readers: "EM-Marin",
      interface: "Wiegand 26/44",
      manufacture: "TANTOS",
      imageSrc: "https://tantos.pro/images/cat-items/1136/ts-kbd-em-ip66.jpeg",
    },
    {
      id: 2,
      name: "Кодовая панель с сенсорной клавиатурой (черная)",
      model: "CTV-KR10 EM-WF",
      readers: "EM-Marin",
      interface: "Wiegand 26/44",
      manufacture: "CCTV",
      imageSrc: "https://ctvcctv.ru/upload/file/image/WF.jpg",
    },
    {
      id: 3,
      name: "Панель кодонаборная (серая, металлическая)",
      model: "AT-CP200EM-W",
      readers: "EM-Marin",
      interface: "Wiegand 26/44",
      manufacture: "AccordTec",
      imageSrc:
        "https://accordtec.ru/upload/iblock/26e/h8b7mrcpxv4r8raeg5urv5bpdl80l6cf/0d17fa96-51cb-11e8-9607-a4bf01347322_0416be80-7338-11ea-b3f4-a4bf01347322.jpg",
    },
  ];

  const arrayOfBioPanel = [
    {
      id: 0,
      name: "Терминал учета рабочего времени биометрический со сканером отпечатка и кодонаборной панелью",
      model: "M7 OUTDOOR",
      readers: "EM-Marin || MIFARE (опционально)",
      interface: "Wiegand 26 || Контроллер SC011 || Ethernet к ПК",
      manufacture: "Anviz",
      imageSrc: "https://www.anviz.com/file/image/1546/1000_1000/M7-02.png",
    },
    {
      id: 1,
      name: "Биометрический контроллер доступа с идентификацией - лиц и отпечатка пальца",
      model: "С2000-BIOAccess-SF10T",
      readers: "EM-Marin",
      interface: "Связь с Орион ПРО через Ethernet",
      manufacture: "НПВ Болид",
      imageSrc:
        "https://bolid.ru/files/341/532/s2000_BIOAccess_SF10T_thumb5.png",
    },
    {
      id: 2,
      name: "Терминал учета рабочего времени биометрический со сканером отпечатка и кодонаборной панелью",
      model: "F22-ID-WIFI",
      readers: "EM-Marin || MIFARE (опционально)",
      interface: "Wiegand 26 || Ethernet к ПК",
      manufacture: "ZKTeco",
      imageSrc:
        "https://zkteco.pro/components/com_jshopping/files/img_products/full_ZKF22IDWIFIn.png",
    },
    {
      id: 3,
      name: "Терминал учета рабочего времени биометрический со сканером отпечатка",
      model: "F16-EM",
      readers: "EM-Marin || MIFARE (опционально)",
      interface: "Wiegand 26 || Ethernet к ПК",
      manufacture: "ZKTeco",
      imageSrc:
        "https://zkteco.pro/components/com_jshopping/files/img_products/full_n_ZKF16ID_2.png",
    },
  ];

  function saveInLocalStorage(value: any) {
    setAccessEntrance(value);
    localStorage.setItem("accessEntrance", value);
  }

  //todo: исправить сохранение на сохранение как объект: список или список с внутренним список кнопок, считывателей и т.д.
  return (
    <div className={"flex flex-col justify-center gap-4"}>
      <div className="flex flex-row gap-6">
        <Checkbox label="Считыватель" />
        <Select
          label={"Выберите модель считывателя:"}
          value={accessEntrance}
          onChange={(value) => {
            saveInLocalStorage(value);
          }}
        >
          {arrayOfAccessReader.map(
            ({ id, name, model, manufacture, imageSrc }) => (
              <Option key={id} value={manufacture}>
                <Avatar
                  variant="circular"
                  alt={model}
                  src={imageSrc}
                  size="xs"
                />
                {" " + name + " || " + model + " || " + manufacture}
              </Option>
            )
          )}
        </Select>
      </div>

      <div className="flex flex-row gap-6">
        <Checkbox label="Кнопка вызова" />
        <Select
          label={"Выберите модель вызывной панели:"}
          value={accessEntrance}
          onChange={(value) => {
            saveInLocalStorage(value);
          }}
        >
          {arrayOfButtonEntrance.map(
            ({ id, name, model, manufacture, imageSrc }) => (
              <Option key={id} value={manufacture}>
                <Avatar
                  variant="circular"
                  alt={model}
                  src={imageSrc}
                  size="xs"
                />
                {" " + name + " || " + model + " || " + manufacture}
              </Option>
            )
          )}
        </Select>
      </div>

      <div className="flex flex-row gap-6">
        <Checkbox label="Кодонаборная панель" />
        <Select
          label={"Выберите модель кодонаборной панели:"}
          value={accessEntrance}
          onChange={(value) => {
            saveInLocalStorage(value);
          }}
        >
          {arrayOfCodePanel.map(
            ({ id, name, model, manufacture, imageSrc }) => (
              <Option key={id} value={manufacture}>
                <Avatar
                  variant="circular"
                  alt={model}
                  src={imageSrc}
                  size="xs"
                />
                {" " + name + " || " + model + " || " + manufacture}
              </Option>
            )
          )}
        </Select>
      </div>

      <div className="flex flex-row gap-6">
        <Checkbox label="Биометрическая панель" />
        <Select
          label={"Выберите модель биометрической панели:"}
          value={accessEntrance}
          onChange={(value) => {
            saveInLocalStorage(value);
          }}
        >
          {arrayOfBioPanel.map(({ id, name, model, manufacture, imageSrc }) => (
            <Option key={id} value={manufacture}>
              <Avatar variant="circular" alt={model} src={imageSrc} size="xs" />
              {" " + name + " || " + model + " || " + manufacture}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
