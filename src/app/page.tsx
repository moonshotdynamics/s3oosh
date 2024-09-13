import S3oosh from '@/components/s3oosh';
import { v4 } from 'uuid';

export default function Home() {
  const s3Config = {
    maxTotalFiles: 10,
    maxSize: 10485760,
    acceptedFileTypes: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'audio/*': ['.mp3', '.wav', '.ogg'],
      'video/*': ['.mp4', '.mov', '.avi', '.mkv'],
    },
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="px-4 md:px-6 flex justify-center w-full container mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white mb-10">
                    Manual S3 Media Uploader ⬆️
                  </h1>
                  <S3oosh config={s3Config} dirInBucket={v4()} />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* v4() and dirInBucket are optional */}
      {/* dirInBucket is optional and is used to create a folder in the S3 bucket */}
    </>
  );
}
