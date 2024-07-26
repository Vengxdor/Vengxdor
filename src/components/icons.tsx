import type { SVGProps } from 'react'

export const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      d='M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33'
      fill='#DE4C36'
    />
  </svg>
)

export const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 452 520'
    width='1em'
    height='1em'
    {...props}
  >
    <path fill='#0c73b8' d='M41 460L0 0h451l-41 460-185 52' />
    <path fill='#30a9dc' d='M226 472l149-41 35-394H226' />
    <path
      fill='#ecedee'
      d='M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z'
    />
    <path
      fill='#fff'
      d='M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z'
    />
  </svg>
)
export const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 256 154'
    width='1em'
    height='1em'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient
        x1='-2.778%'
        y1='32%'
        x2='100%'
        y2='67.556%'
        id='gradient'
      >
        <stop stopColor='#2298BD' offset='0%' />
        <stop stopColor='#0ED7B5' offset='100%' />
      </linearGradient>
    </defs>
    <path
      d='M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z'
      fill='url(#gradient)'
    />
  </svg>
)

export const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 256 351'
    width='1em'
    height='1em'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <filter
        x='-50%'
        y='-50%'
        width='200%'
        height='200%'
        filterUnits='objectBoundingBox'
        id='b'
      >
        <feGaussianBlur
          stdDeviation={17.5}
          in='SourceAlpha'
          result='shadowBlurInner1'
        />
        <feOffset in='shadowBlurInner1' result='shadowOffsetInner1' />
        <feComposite
          in='shadowOffsetInner1'
          in2='SourceAlpha'
          operator='arithmetic'
          k2={-1}
          k3={1}
          result='shadowInnerInner1'
        />
        <feColorMatrix
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          in='shadowInnerInner1'
        />
      </filter>
      <filter
        x='-50%'
        y='-50%'
        width='200%'
        height='200%'
        filterUnits='objectBoundingBox'
        id='d'
      >
        <feGaussianBlur
          stdDeviation={3.5}
          in='SourceAlpha'
          result='shadowBlurInner1'
        />
        <feOffset
          dx={1}
          dy={-9}
          in='shadowBlurInner1'
          result='shadowOffsetInner1'
        />
        <feComposite
          in='shadowOffsetInner1'
          in2='SourceAlpha'
          operator='arithmetic'
          k2={-1}
          k3={1}
          result='shadowInnerInner1'
        />
        <feColorMatrix
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0'
          in='shadowInnerInner1'
        />
      </filter>
      <path
        d='m1.253 280.732 1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z'
        id='a'
      />
      <path
        d='m134.417 148.974 32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556Z'
        id='c'
      />
    </defs>
    <path
      d='m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z'
      fill='#FFC24A'
    />
    <use fill='#FFA712' fillRule='evenodd' xlinkHref='#a' />
    <use filter='url(#b)' xlinkHref='#a' />
    <path
      d='m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z'
      fill='#F4BD62'
    />
    <use fill='#FFA50E' fillRule='evenodd' xlinkHref='#c' />
    <use filter='url(#d)' xlinkHref='#c' />
    <path
      fill='#F6820C'
      d='m0 282.998.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z'
    />
    <path
      d='m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005'
      fill='#FDE068'
    />
    <path
      d='M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z'
      fill='#FCCA3F'
    />
    <path
      d='M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689Z'
      fill='#EEAB37'
    />
  </svg>
)

export const HTML5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 452 520'
    width='1em'
    height='1em'
    {...props}
  >
    <path fill='#e34f26' d='M41 460L0 0h451l-41 460-185 52' />
    <path fill='#ef652a' d='M226 472l149-41 35-394H226' />
    <path
      fill='#ecedee'
      d='M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z'
    />
    <path
      fill='#fff'
      d='M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z'
    />
  </svg>
)
export const JavaScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 1052 1052'
    {...props}
  >
    <path fill='#f0db4f' d='M0 0h1052v1052H0z' />
    <path
      d='M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z'
      fill='#323330'
    />
  </svg>
)
export const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 180 180'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='mask0_408_139'
      style={{
        maskType: 'alpha'
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill='black' />
    </mask>
    <g mask='url(#mask0_408_139)'>
      <circle
        cx={90}
        cy={90}
        r={87}
        fill='black'
        stroke='white'
        strokeWidth={6}
      />
      <path
        d='M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z'
        fill='url(#paint0_linear_408_139)'
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill='url(#paint1_linear_408_139)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_408_139'
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint1_linear_408_139'
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export const TypeScript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 256 256'
    width='1em'
    height='1em'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <path
      d='M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z'
      fill='#3178C6'
    />
    <path
      d='M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z'
      fill='#FFF'
    />
  </svg>
)

export const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    {...props}
  >
    <path
      d='M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453'
      fill='#0A66C2'
    />
  </svg>
)

export function Github (props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        d='M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1'
      />
    </svg>
  )
}
