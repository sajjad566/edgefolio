import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Companies = ({ title, list }) => (
  <div className="prose prose-invert flex flex-wrap items-center justify-between">
    {title && <h4 className="mb-4 w-full lg:mb-0 lg:w-auto">{title}</h4>}
    {list &&
      list.map(({ icon }, i) => (
        <Reveal key={i} className="my-2" animation="fade-in zoom-in" delay={i * 250}>
          {icon && <Icon {...icon} className="w-36 fill-current text-omega-500" />}
        </Reveal>
      ))}
  </div>
)

export default Companies
