import { Component } from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium",
      ],
      name:"Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый",
      description: "Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности. Удобные способы оставаться на связи. Более быстрый двухъядерный процессор для повышенной производительности. Apple Watch SE полны достоинств, а теперь это ещё более выгодная покупка, чем когда‑либо.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000"
    },
    {
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h5b/h70/87197780181022.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha6/h60/87197780443166.jpg?format=gallery-medium"
      ],
      name: "Смарт-часы Xiaomi Redmi Watch 5 Active 51 мм черный-черный",
      description: "Redmi Watch 5 Active с большим дисплеем помогут вести активны образ жизни, контролировать ваше здоровье и повысить эффективность при решении повседневных задач.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000"
    },
    {
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/h52/h7d/87248467787806.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h87/h56/87248467853342.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h3b/87248467984414.jpg?format=gallery-medium",
      ],
      name:"Смарт-часы Huawei Watch GT 5 Pro 46 мм черный-черный",
      description: "Тринадцать новых тематических циферблатов дают большой простор вашему воображению при создании стильного образа: вы можете выбрать и спортивную версию циферблата, и классический вариант.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/huawei-watch-gt-5-pro-46-mm-chernyi-chernyi-124097507/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/h7b/hd0/86051008020510.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h21/hd3/64634132627486.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h97/h76/64634135445534.jpg?format=gallery-medium",
      ],
      name:"Смарт-часы COLMI P28 Plus черный",
      description: "Смарт-часы Colmi P28 Plus. Соответствующие датчики помогают смарт-часам подсчитывать пройденное расстояние, затраченные калории, содержание кислорода в крови, артериальное давление.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/h72/h23/85318600196126.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h75/hcc/85318600392734.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h40/hab/85318600458270.png?format=gallery-medium",
      ],
      name:"Смарт-часы Garmin Forerunner 165 черный-серый",
      description: "Двигайтесь только вперед — регистрируйтесь на забеги и блестяще готовьтесь к ним с новыми легкими в использовании беговыми смарт-часами с GPS - Forerunner 165!",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/garmin-forerunner-165-chernyi-seryi-117095009/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/h03/h68/86681927876638.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h18/h96/86681928073246.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd9/h4e/86681928204318.jpg?format=gallery-medium",
      ],
      name:"Смарт-часы Samsung Galaxy Watch Ultra 47 мм серебристый-черный",
      description: "Откройте для себя новый уровень заботы о здоровье на базе AI",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/samsung-galaxy-watch-ultra-47-mm-serebristyi-chernyi-122020632/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/he0/h86/85135995076638.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/haa/h28/85393428447262.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha2/h86/85760910589982.png?format=gallery-medium",
      ],
      name:"Смарт-часы Nepro100device NPD Maks Kids Watch черный",
      description: "Операционная система Android",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/nepro100device-npd-maks-kids-watch-chernyi-116533653/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/pf4/p78/7030882.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd8/p78/7030883.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc3/p75/7030890.png?format=gallery-medium",
      ],
      name:"Смарт-часы ARTEO AS10 41 мм розовый",
      description: "Описание смарт-часов Arteo АS10",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/arteo-as10-41-mm-rozovyi-129639580/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/haf/hbc/86609719754782.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86609719885854.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h65/hc7/86609720279070.jpg?format=gallery-medium",
      ],
      name:"Смарт-часы Samsung Galaxy Watch7 44 мм серебристый-белый",
      description: "Добро пожаловать в эру контроля самочувствия с применением искусственного интеллекта.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/samsung-galaxy-watch7-44-mm-serebristyi-belyi-121760294/?c=750000000"
    },{
      imageUrls: [
        "https://resources.cdn-kaspi.kz/img/m/p/h13/h52/86633383264286.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd0/ha6/86633383788574.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h65/h79/86633383723038.jpg?format=gallery-medium",
      ],
      name:"Смарт-часы POLOS GTX 12 45 мм черный-черный",
      description: "Смарт-часы POLOS GTX12 — это достойный конкурент Watch Series 9.",
      rating:5.0,
      kaspilink: "https://kaspi.kz/shop/p/polos-gtx-12-45-mm-chernyi-chernyi-121668783/?c=750000000"
    },
  ];

  share(product: Product) {
    const encodedUrl = `https://wa.me/?text=${encodeURIComponent(product.kaspilink)}`;
    const whatsappShareUrl = `https://wa.me/?text=${encodedUrl}`;
    window.open(whatsappShareUrl, '_blank');
  }
}
