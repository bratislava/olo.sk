export type VideoProps = {
  url: string
  ariaLabel: string
}

/**
 * Figma: https://www.figma.com/file/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=1199%3A13348
 */

// TODO: The video should scale responsively

const Video = ({ url, ariaLabel }: VideoProps) => {
  return (
    <div className="h-[10.125rem] overflow-hidden rounded-3xl lg:h-[42.75rem]">
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
