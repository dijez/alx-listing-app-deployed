export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}
export interface PillProps{
  label: string
}

export interface PropertyProps{
  id?:string,
  name: string,
    address: {
      state: string,
      city: string,
      country: string
    },
    rating: number,
    category: string[],
    price: number,
    offers: {
      bed: string,
      shower: string,
      occupants: string
    },
    image: string,
    discount: string,
}
