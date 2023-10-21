import type { Card } from "~/interfaces/Card";

export const useFavoritos = () => useState<Card[]>('favoritos', () => [])