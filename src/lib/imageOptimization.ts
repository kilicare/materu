export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export const getOptimizedImageProps = ({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes,
  quality = 75,
}: ImageProps) => {
  return {
    src,
    alt,
    width,
    height,
    priority,
    sizes:
      sizes ||
      '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quality,
    loading: priority ? 'eager' : ('lazy' as const),
  };
};

// Image srcset configuration
export const imageSrcSet = (
  basePath: string,
  width: number
) => {
  return {
    srcSet: `
      ${basePath}?w=${width * 0.5}&q=75 ${width * 0.5}w,
      ${basePath}?w=${width}&q=75 ${width}w,
      ${basePath}?w=${width * 2}&q=75 ${width * 2}w
    `,
    sizes: `(max-width: 768px) 100vw, ${width}px`,
  };
};
