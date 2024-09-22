export type VideoProps = {
  url: string
  ariaLabel: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199%3A13348
 */

const Video = ({ url, ariaLabel }: VideoProps) => {
  return (
    <div className="size-full overflow-hidden rounded-3xl">
      <iframe
        width="100%"
        height="100%"
        title={ariaLabel}
        src={url}
        allow="accelerometer; encrypted-media; gyroscope; web-share"
      />
    </div>
  )
}

export default Video
