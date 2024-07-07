import { useTranslation } from 'next-i18next'
import React from 'react'

import AnimateHeight from '@/src/components/common/Accordion/AnimateHeight'
import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Typography from '@/src/components/common/Typography/Typography'
import { Breadcrumb } from '@/src/utils/getPageBreadcrumbs'

type BreadcrumbsProps = {
  // Todo add white background variant
  breadcrumbs: Breadcrumb[]
}

const DesktopBreadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const { t } = useTranslation()

  return (
    <ol className="flex flex-wrap gap-2 py-4.5">
      <li className="size-5">
        <Button
          variant="icon-wrapped-negative-margin"
          href="/"
          asLink
          hasLinkIcon={false}
          // eslint-disable-next-line sonarjs/no-duplicate-string
          aria-label={t('breadcrumbs.homepage')}
          icon={<Icon name="domcek" />}
        />
      </li>
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1

        return (
          <li key={breadcrumb.path} className="flex gap-2">
            <Icon name="chevron-doprava" aria-hidden />
            {breadcrumb.path && !isLast ? (
              <Button variant="black-link" href={breadcrumb.path} asLink hasLinkIcon={false}>
                {breadcrumb.title}
              </Button>
            ) : (
              <Typography>{breadcrumb.title}</Typography>
            )}
          </li>
        )
      })}
    </ol>
  )
}

const goBack = () => {
  window.history.back()
}

const MobileBreadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const { t } = useTranslation()
  const witHome = [{ title: t('breadcrumbs.homepage'), path: '/' }, ...breadcrumbs]
  const withHomeWithoutCurrent = witHome.slice(0, -1)
  const last = withHomeWithoutCurrent.at(-1)
  const showDetails = withHomeWithoutCurrent.length > 0

  return (
    <AnimateHeight isVisible className="relative">
      <div className="flex items-center gap-2 py-3 ">
        <Button
          onPress={goBack}
          variant="black-link"
          startIcon={<Icon name="chevron-dolava" />}
          className="shrink-0"
        >
          {t('breadcrumbs.back')}
        </Button>
        <div className="h-4 shrink-0 border-l border-border-default" aria-hidden />
        {/* Right margin added so the line will not overlap the accordion icon */}
        <div className="mr-7 grow truncate">
          {last?.path ? (
            <Button variant="black-link" href={last.path} asLink hasLinkIcon={false}>
              {last.title}
            </Button>
          ) : (
            <div className="truncate">{last?.title}</div>
          )}
        </div>
      </div>

      {showDetails && (
        <details className="group shrink-0">
          <summary className="block cursor-pointer">
            <Icon
              name="chevron-dole"
              className="absolute right-0 top-3.5 size-5 transition-transform group-open:rotate-180"
            />
          </summary>
          <ol className="flex flex-col flex-wrap gap-1 py-2">
            {withHomeWithoutCurrent.map((breadcrumb) => (
              <li key={breadcrumb.path}>
                {breadcrumb.path ? (
                  <Button
                    href={breadcrumb.path}
                    variant="black-link"
                    asLink
                    hasLinkIcon={false}
                    className="flex gap-1"
                    startIcon={
                      <Icon name="chevron-doprava" className="size-5 shrink-0 rotate-180" />
                    }
                  >
                    {breadcrumb.title}
                  </Button>
                ) : (
                  <div className="flex gap-1">
                    <Icon name="chevron-doprava" className="size-5 shrink-0 rotate-180" />
                    {breadcrumb.title}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </details>
      )}
    </AnimateHeight>
  )
}

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=38-1950&m=dev
 */
const BreadcrumbsPlaceholder = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <>
      <nav className="hidden lg:block">
        <DesktopBreadcrumbs breadcrumbs={breadcrumbs} />
      </nav>
      <nav className="lg:hidden">
        <MobileBreadcrumbs breadcrumbs={breadcrumbs} />
      </nav>
    </>
  )
}

export default BreadcrumbsPlaceholder
