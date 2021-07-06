import NextImage, {ImageProps} from 'next/image';
import { useState } from "react";

type FallBackImgProps = ImageProps & {
  fallbackSrc: string;
}

export const Image = (props:FallBackImgProps) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
      <NextImage
          {...rest}
          src={imgSrc}
          onError={() => {
              setImgSrc(fallbackSrc);
          }}
      />
  );
};