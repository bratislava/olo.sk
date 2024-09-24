export type VideoProps = {
  url: string
  ariaLabel: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199%3A13348
 */

const Video = ({ url, ariaLabel }: VideoProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl pb-[56.25%]">
      {/* pb-[56.25%] creates a 16:9 aspect ratio */}
      <iframe
        width="100%"
        height="100%"
        title={ariaLabel}
        src={url}
        allow="accelerometer; encrypted-media; gyroscope; web-share"
        className="absolute left-0 top-0 size-full border-0"
      />
    </div>
  )
}

export default Video
