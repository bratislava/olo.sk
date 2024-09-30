export type VideoProps = {
  url: string
  alternativeText: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199%3A13348
 */

const Video = ({ url, alternativeText }: VideoProps) => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
      <iframe
        width="100%"
        height="100%"
        title={alternativeText}
        src={url}
        allow="accelerometer; encrypted-media; gyroscope; web-share"
        className="absolute left-0 top-0 size-full border-0"
      />
    </div>
  )
}

export default Video
