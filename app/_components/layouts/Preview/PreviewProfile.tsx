import { usePicture } from "@/app/_hooks/usePicture";
import { PreviewEmail } from "./PreviewEmail";
import { PreviewFullname } from "./PreviewFullname";
import { PreviewPicture } from "./PreviewPicture";
import type { Profile } from "@/app/_stores/types";

type Props = {
  profilePreview: Profile | undefined;
  isPreview?: boolean;
};

export const PreviewProfile = ({ profilePreview, isPreview }: Props) => {
  const { picture, username, firstname, lastname, email } =
    profilePreview || {};
  const { pictureURL } = usePicture({ picture });

  console.log(pictureURL);

  const handleFullname = () => {
    if (!firstname && !lastname) return "";

    return `${firstname} ${lastname}`;
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <PreviewPicture isPreview={isPreview} pictureURL={pictureURL} />
      <div className="flex flex-col items-center gap-2">
        <PreviewFullname fullname={handleFullname()} isPreview={isPreview} />
        <PreviewEmail email={email} isPreview={isPreview} />
      </div>
    </div>
  );
};
