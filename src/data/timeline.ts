import proyecto4Asset from "@/assets/proyecto-4.jpg.asset.json";
import proyecto3Asset from "@/assets/proyecto-3.jpg.asset.json";
import { assetUrl } from "@/lib/asset-url";

export interface TimelineImage {
  id: number;
  src: string;
  alt: string;
}

export interface TimelineItem {
  year?: string;
  title?: string;
  place?: string;
  text?: string;
  images?: TimelineImage[];
  imagesDescription?: string;
  disabled?: boolean;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "Mayo - 2026",
    title: "Palacio Letelier Llona",
    place: "Cienfuegos 51, Santiago, Región Metropolitana",
    text: "En el contexto de la celebración del día de los Patrimonios en Chile @fvb-cl nos invitó a montar PANTONE_nuestro patrimonio futuro en el hall central del Palacio Letelier Llona (José Fortecha Ubach, 1919), edificio de estilo gótico, ubicado en la esquina de la calle Cienfuegos con Erasmo Escala, en la comuna de Santiago. Para este espacio, se seleccionaron 30 obras y se ubicaron en el centro del hall para ser recorridas perimetralmente de manera cronológica y agrupadas por años. La base museográfica de las obras expuestas están diseñadas según la medida del módulo del parquet existente. La instalación puede ser recorrida en el primer nivel, y vista en altura desde el corredor perimetral del segundo nivel del Palacio.",
    imagesDescription: "Fotos por Rodrigo Santa María y Arantxa Chibey",
    images: [
      { id: 1, src: "/exposiciones/letelier/palacio-letelier-1.webp", alt: "Palacio Letelier Llona 1" },
      { id: 2, src: "/exposiciones/letelier/palacio-letelier-2.webp", alt: "Palacio Letelier Llona 2" },
      { id: 3, src: "/exposiciones/letelier/palacio-letelier-3.webp", alt: "Palacio Letelier Llona 3" },
      { id: 4, src: "/exposiciones/letelier/palacio-letelier-4.webp", alt: "Palacio Letelier Llona 4" },
      { id: 5, src: "/exposiciones/letelier/palacio-letelier-5.webp", alt: "Palacio Letelier Llona 5" },
      { id: 6, src: "/exposiciones/letelier/palacio-letelier-6.webp", alt: "Palacio Letelier Llona 6" },
      { id: 7, src: "/exposiciones/letelier/palacio-letelier-7.webp", alt: "Palacio Letelier Llona 7" },
      { id: 8, src: "/exposiciones/letelier/palacio-letelier-8.webp", alt: "Palacio Letelier Llona 8" },
      { id: 9, src: "/exposiciones/letelier/palacio-letelier-9.webp", alt: "Palacio Letelier Llona 9" },
      { id: 10, src: "/exposiciones/letelier/palacio-letelier-10.webp", alt: "Palacio Letelier Llona 10" },
      { id: 11, src: "/exposiciones/letelier/palacio-letelier-11.webp", alt: "Palacio Letelier Llona 11" },
      { id: 12, src: "/exposiciones/letelier/palacio-letelier-12.webp", alt: "Palacio Letelier Llona 12" },
      { id: 13, src: "/exposiciones/letelier/palacio-letelier-13.webp", alt: "Palacio Letelier Llona 13" },
      { id: 14, src: "/exposiciones/letelier/palacio-letelier-14.webp", alt: "Palacio Letelier Llona 14" },
      { id: 15, src: "/exposiciones/letelier/palacio-letelier-15.webp", alt: "Palacio Letelier Llona 15" },
      { id: 16, src: "/exposiciones/letelier/palacio-letelier-16.webp", alt: "Palacio Letelier Llona 16" },
      { id: 17, src: "/exposiciones/letelier/palacio-letelier-17.webp", alt: "Palacio Letelier Llona 17" },
      { id: 18, src: "/exposiciones/letelier/palacio-letelier-18.webp", alt: "Palacio Letelier Llona 18" },
      { id: 19, src: "/exposiciones/letelier/palacio-letelier-19.webp", alt: "Palacio Letelier Llona 19" },
      { id: 20, src: "/exposiciones/letelier/palacio-letelier-20.webp", alt: "Palacio Letelier Llona 20" },
      { id: 21, src: "/exposiciones/letelier/palacio-letelier-21.webp", alt: "Palacio Letelier Llona 21" }
    ],
  },
  {
    year: "2026",
    title: "Proximamente",
    place: "",
    text: "",
    disabled: true,
    images: [
      {
        id: 1,
        src: assetUrl(proyecto4Asset.url),
        alt: "Paisaje desértico",
      }
    ],
  },
];
