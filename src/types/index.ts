export type ServiceContent = {
  title: string;
  description: string;
  banner: {
    title: string;
    description: string;
    items: {
      icon?: string | null;
      title: string;
      description: string;
    }[];
  };
  checkList?: {
    title: string;
    description?: string;
    items: string[];
  };
  expert?: {
    name: string;
    role: string;
    image: string;
  };
};
