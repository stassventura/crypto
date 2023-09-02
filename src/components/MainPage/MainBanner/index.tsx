/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './MainBanner.module.scss'

const MainBanner = () => {
  return (
   <>
    <section className={`${styles.mainBannerWrapper}`}>
    <div className={`${styles.mainWrapper} container`}>
    <div className={styles.content}>
        <div className={styles.upTitle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <mask id="path-1-inside-1_6_161" fill="white">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 0C1.08937 0 0.320885 0.608597 0.0790983 1.44124L14.5382 6.829C14.8512 6.94565 15.0588 7.24456 15.0588 7.57865V8.6768C15.0588 9.23465 14.5022 9.62123 13.9795 9.42645L0 4.21739V6.14749L14.5382 11.5647C14.8512 11.6814 15.0588 11.9803 15.0588 12.3144V14.0684C15.0588 14.4025 14.8512 14.7014 14.5382 14.8181L11.3662 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM1.68866 15.9759L8.26592 13.9561C9.01946 13.7247 9.01946 12.658 8.26591 12.4266L0 9.88832V14C0 14.9987 0.731956 15.8264 1.68866 15.9759Z"/>
  </mask>
  <path fillRule="evenodd" clipRule="evenodd" d="M2 0C1.08937 0 0.320885 0.608597 0.0790983 1.44124L14.5382 6.829C14.8512 6.94565 15.0588 7.24456 15.0588 7.57865V8.6768C15.0588 9.23465 14.5022 9.62123 13.9795 9.42645L0 4.21739V6.14749L14.5382 11.5647C14.8512 11.6814 15.0588 11.9803 15.0588 12.3144V14.0684C15.0588 14.4025 14.8512 14.7014 14.5382 14.8181L11.3662 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM1.68866 15.9759L8.26592 13.9561C9.01946 13.7247 9.01946 12.658 8.26591 12.4266L0 9.88832V14C0 14.9987 0.731956 15.8264 1.68866 15.9759Z" fill="#4ACDFE"/>
  <path d="M0.0790983 1.44124L-0.209001 1.35758L-0.286682 1.62509L-0.0256523 1.72236L0.0790983 1.44124ZM14.5382 6.829L14.6429 6.54788L14.5382 6.829ZM13.9795 9.42645L13.8747 9.70756L13.9795 9.42645ZM0 4.21739L0.104751 3.93627L-0.3 3.78545V4.21739H0ZM0 6.14749H-0.3V6.35586L-0.104751 6.42861L0 6.14749ZM14.5382 11.5647L14.4334 11.8458L14.5382 11.5647ZM14.5382 14.8181L14.4334 14.5369L14.5382 14.8181ZM11.3662 16L11.2615 15.7189L11.3662 16.3V16ZM8.26592 13.9561L8.35398 14.2429L8.26592 13.9561ZM1.68866 15.9759L1.64233 16.2723L1.71063 16.283L1.77672 16.2627L1.68866 15.9759ZM8.26591 12.4266L8.35398 12.1399L8.26591 12.4266ZM0 9.88832L0.088066 9.60154L-0.3 9.48237V9.88832H0ZM0.367197 1.5249C0.57277 0.816967 1.2264 0.3 2 0.3V-0.3C0.952337 -0.3 0.0690001 0.400227 -0.209001 1.35758L0.367197 1.5249ZM-0.0256523 1.72236L14.4334 7.11011L14.6429 6.54788L0.183849 1.16012L-0.0256523 1.72236ZM14.4334 7.11011C14.6291 7.18302 14.7588 7.36984 14.7588 7.57865H15.3588C15.3588 7.11928 15.0734 6.70828 14.6429 6.54788L14.4334 7.11011ZM14.7588 7.57865V8.6768H15.3588V7.57865H14.7588ZM14.7588 8.6768C14.7588 9.02546 14.411 9.26707 14.0842 9.14533L13.8747 9.70756C14.5935 9.97539 15.3588 9.44385 15.3588 8.6768H14.7588ZM14.0842 9.14533L0.104751 3.93627L-0.104751 4.4985L13.8747 9.70756L14.0842 9.14533ZM0.3 6.14749V4.21739H-0.3V6.14749H0.3ZM14.6429 11.2836L0.104751 5.86638L-0.104751 6.42861L14.4334 11.8458L14.6429 11.2836ZM15.3588 12.3144C15.3588 11.855 15.0734 11.444 14.6429 11.2836L14.4334 11.8458C14.6291 11.9188 14.7588 12.1056 14.7588 12.3144H15.3588ZM15.3588 14.0684V12.3144H14.7588V14.0684H15.3588ZM14.6429 15.0992C15.0734 14.9388 15.3588 14.5278 15.3588 14.0684H14.7588C14.7588 14.2772 14.6291 14.464 14.4334 14.5369L14.6429 15.0992ZM11.471 16.2811L14.6429 15.0992L14.4334 14.5369L11.2615 15.7189L11.471 16.2811ZM14 15.7H11.3662V16.3H14V15.7ZM15.7 14C15.7 14.9389 14.9389 15.7 14 15.7V16.3C15.2703 16.3 16.3 15.2703 16.3 14H15.7ZM15.7 2V14H16.3V2H15.7ZM14 0.3C14.9389 0.3 15.7 1.06112 15.7 2H16.3C16.3 0.729745 15.2703 -0.3 14 -0.3V0.3ZM2 0.3H14V-0.3H2V0.3ZM8.17785 13.6694L1.60059 15.6891L1.77672 16.2627L8.35398 14.2429L8.17785 13.6694ZM8.17785 12.7134C8.64882 12.858 8.64881 13.5247 8.17785 13.6694L8.35398 14.2429C9.39011 13.9248 9.3901 12.458 8.35398 12.1399L8.17785 12.7134ZM-0.088066 10.1751L8.17785 12.7134L8.35398 12.1399L0.088066 9.60154L-0.088066 10.1751ZM0.3 14V9.88832H-0.3V14H0.3ZM1.73499 15.6795C0.922045 15.5524 0.3 14.8486 0.3 14H-0.3C-0.3 15.1487 0.541866 16.1003 1.64233 16.2723L1.73499 15.6795Z" fill="url(#paint0_linear_6_161)" style={{mixBlendMode:'overlay'}} mask="url(#path-1-inside-1_6_161)"/>
  <defs>
    <linearGradient id="paint0_linear_6_161" x1="8" y1="0" x2="8" y2="1.37143" gradientUnits="userSpaceOnUse">
      <stop stopColor="white" stopOpacity="0.48"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
  </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="14" viewBox="0 0 350 14" fill="none">
  <path d="M0 0.700004H4.95C6.678 0.700004 8.112 1.306 9.252 2.518C10.404 3.73 10.98 5.224 10.98 7C10.98 8.764 10.404 10.258 9.252 11.482C8.112 12.694 6.678 13.3 4.95 13.3H0V0.700004ZM2.07 11.32H4.95C6.138 11.32 7.104 10.912 7.848 10.096C8.604 9.28 8.982 8.248 8.982 7C8.982 5.752 8.604 4.72 7.848 3.904C7.104 3.088 6.138 2.68 4.95 2.68H2.07V11.32Z" fill="#4ACDFE"/>
  <path d="M16.7372 7.918V11.32H22.3172V13.3H14.6672V0.700004H22.2272V2.68H16.7372V5.956H21.7772V7.918H16.7372Z" fill="#4ACDFE"/>
  <path d="M31.8646 13.534C29.9686 13.534 28.3966 12.91 27.1486 11.662C25.9006 10.39 25.2766 8.836 25.2766 7C25.2766 5.152 25.9006 3.604 27.1486 2.356C28.3846 1.096 29.9566 0.466003 31.8646 0.466003C33.0046 0.466003 34.0546 0.736004 35.0146 1.276C35.9866 1.816 36.7426 2.548 37.2826 3.472L35.4826 4.516C35.1466 3.892 34.6546 3.4 34.0066 3.04C33.3706 2.668 32.6566 2.482 31.8646 2.482C30.5326 2.482 29.4406 2.908 28.5886 3.76C27.7606 4.6 27.3466 5.68 27.3466 7C27.3466 8.32 27.7606 9.4 28.5886 10.24C29.4406 11.092 30.5326 11.518 31.8646 11.518C32.6566 11.518 33.3766 11.338 34.0246 10.978C34.6726 10.606 35.1586 10.108 35.4826 9.484L37.2826 10.51C36.7666 11.422 36.0166 12.16 35.0326 12.724C34.0846 13.264 33.0286 13.534 31.8646 13.534Z" fill="#4ACDFE"/>
  <path d="M42.8723 7.918V11.32H48.4523V13.3H40.8023V0.700004H48.3623V2.68H42.8723V5.956H47.9123V7.918H42.8723Z" fill="#4ACDFE"/>
  <path d="M59.7073 9.25V0.700004H61.7773V13.3H60.1573L54.2173 4.75V13.3H52.1473V0.700004H53.7673L59.7073 9.25Z" fill="#4ACDFE"/>
  <path d="M65.1038 0.700004H74.2838V2.68H70.7377V13.3H68.6677V2.68H65.1038V0.700004Z" fill="#4ACDFE"/>
  <path d="M87.0645 13.3H84.7965L82.1325 8.71H79.6845V13.3H77.6145V0.700004H82.6545C83.7825 0.700004 84.7365 1.096 85.5165 1.888C86.3085 2.656 86.7045 3.61 86.7045 4.75C86.7045 5.554 86.4705 6.292 86.0025 6.964C85.5465 7.624 84.9465 8.104 84.2025 8.404L87.0645 13.3ZM82.6545 2.644H79.6845V6.856H82.6545C83.2065 6.856 83.6745 6.652 84.0585 6.244C84.4425 5.836 84.6345 5.338 84.6345 4.75C84.6345 4.162 84.4425 3.664 84.0585 3.256C83.6745 2.848 83.2065 2.644 82.6545 2.644Z" fill="#4ACDFE"/>
  <path d="M100.894 13.3H98.6615L97.7795 10.762H92.4155L91.5335 13.3H89.2835L93.8555 0.700004H96.3395L100.894 13.3ZM95.0975 3.13L93.0995 8.818H97.0955L95.0975 3.13Z" fill="#4ACDFE"/>
  <path d="M106.118 0.700004V11.32H111.248V13.3H104.048V0.700004H106.118Z" fill="#4ACDFE"/>
  <path d="M114.585 13.3V0.700004H116.655V13.3H114.585Z" fill="#4ACDFE"/>
  <path d="M128.623 2.41L122.971 11.32H128.767V13.3H120.397V11.59L126.049 2.68H120.523V0.700004H128.623V2.41Z" fill="#4ACDFE"/>
  <path d="M134.388 7.918V11.32H139.968V13.3H132.318V0.700004H139.878V2.68H134.388V5.956H139.428V7.918H134.388Z" fill="#4ACDFE"/>
  <path d="M143.663 0.700004H148.613C150.34 0.700004 151.775 1.306 152.915 2.518C154.066 3.73 154.643 5.224 154.643 7C154.643 8.764 154.066 10.258 152.915 11.482C151.775 12.694 150.34 13.3 148.613 13.3H143.663V0.700004ZM145.733 11.32H148.613C149.801 11.32 150.767 10.912 151.511 10.096C152.267 9.28 152.645 8.248 152.645 7C152.645 5.752 152.267 4.72 151.511 3.904C150.767 3.088 149.801 2.68 148.613 2.68H145.733V11.32Z" fill="#4ACDFE"/>
  <path d="M170.588 13.534C168.692 13.534 167.12 12.91 165.872 11.662C164.624 10.39 164 8.836 164 7C164 5.152 164.624 3.604 165.872 2.356C167.108 1.096 168.68 0.466003 170.588 0.466003C171.728 0.466003 172.778 0.736004 173.738 1.276C174.71 1.816 175.466 2.548 176.006 3.472L174.206 4.516C173.87 3.892 173.378 3.4 172.73 3.04C172.094 2.668 171.38 2.482 170.588 2.482C169.256 2.482 168.164 2.908 167.312 3.76C166.484 4.6 166.07 5.68 166.07 7C166.07 8.32 166.484 9.4 167.312 10.24C168.164 11.092 169.256 11.518 170.588 11.518C171.38 11.518 172.1 11.338 172.748 10.978C173.396 10.606 173.882 10.108 174.206 9.484L176.006 10.51C175.49 11.422 174.74 12.16 173.756 12.724C172.808 13.264 171.752 13.534 170.588 13.534Z" fill="#4ACDFE"/>
  <path d="M188.975 13.3H186.707L184.043 8.71H181.595V13.3H179.525V0.700004H184.565C185.693 0.700004 186.647 1.096 187.427 1.888C188.219 2.656 188.615 3.61 188.615 4.75C188.615 5.554 188.381 6.292 187.913 6.964C187.457 7.624 186.857 8.104 186.113 8.404L188.975 13.3ZM184.565 2.644H181.595V6.856H184.565C185.117 6.856 185.585 6.652 185.969 6.244C186.353 5.836 186.545 5.338 186.545 4.75C186.545 4.162 186.353 3.664 185.969 3.256C185.585 2.848 185.117 2.644 184.565 2.644Z" fill="#4ACDFE"/>
  <path d="M199.339 0.700004H201.697L197.305 8.296V13.3H195.235V8.296L190.843 0.700004H193.201L196.279 6.28L199.339 0.700004Z" fill="#4ACDFE"/>
  <path d="M204.852 0.700004H209.496C210.684 0.700004 211.674 1.096 212.466 1.888C213.27 2.68 213.672 3.664 213.672 4.84C213.672 6.004 213.27 6.988 212.466 7.792C211.674 8.584 210.684 8.98 209.496 8.98H206.922V13.3H204.852V0.700004ZM206.922 7.036H209.496C210.108 7.036 210.612 6.832 211.008 6.424C211.404 6.004 211.602 5.476 211.602 4.84C211.602 4.204 211.404 3.682 211.008 3.274C210.612 2.854 210.108 2.644 209.496 2.644H206.922V7.036Z" fill="#4ACDFE"/>
  <path d="M216.015 0.700004H225.195V2.68H221.649V13.3H219.579V2.68H216.015V0.700004Z" fill="#4ACDFE"/>
  <path d="M238.335 11.644C237.075 12.904 235.533 13.534 233.709 13.534C231.885 13.534 230.337 12.904 229.065 11.644C227.805 10.372 227.175 8.824 227.175 7C227.175 5.176 227.805 3.634 229.065 2.374C230.337 1.102 231.885 0.466003 233.709 0.466003C235.533 0.466003 237.075 1.102 238.335 2.374C239.607 3.634 240.243 5.176 240.243 7C240.243 8.824 239.607 10.372 238.335 11.644ZM230.523 10.24C231.399 11.092 232.461 11.518 233.709 11.518C234.969 11.518 236.025 11.092 236.877 10.24C237.741 9.376 238.173 8.296 238.173 7C238.173 5.704 237.741 4.63 236.877 3.778C236.025 2.914 234.969 2.482 233.709 2.482C232.449 2.482 231.387 2.914 230.523 3.778C229.671 4.63 229.245 5.704 229.245 7C229.245 8.284 229.671 9.364 230.523 10.24Z" fill="#4ACDFE"/>
  <path d="M250.232 0.700004H254.876C256.064 0.700004 257.054 1.096 257.846 1.888C258.65 2.68 259.052 3.664 259.052 4.84C259.052 6.004 258.65 6.988 257.846 7.792C257.054 8.584 256.064 8.98 254.876 8.98H252.302V13.3H250.232V0.700004ZM252.302 7.036H254.876C255.488 7.036 255.992 6.832 256.388 6.424C256.784 6.004 256.982 5.476 256.982 4.84C256.982 4.204 256.784 3.682 256.388 3.274C255.992 2.854 255.488 2.644 254.876 2.644H252.302V7.036Z" fill="#4ACDFE"/>
  <path d="M264.719 0.700004V11.32H269.849V13.3H262.649V0.700004H264.719Z" fill="#4ACDFE"/>
  <path d="M283.977 13.3H281.745L280.863 10.762H275.499L274.617 13.3H272.367L276.939 0.700004H279.423L283.977 13.3ZM278.181 3.13L276.183 8.818H280.179L278.181 3.13Z" fill="#4ACDFE"/>
  <path d="M285.245 0.700004H294.425V2.68H290.879V13.3H288.809V2.68H285.245V0.700004Z" fill="#4ACDFE"/>
  <path d="M305.136 0.700004V2.68H299.826V6.208H304.956V8.188H299.826V13.3H297.756V0.700004H305.136Z" fill="#4ACDFE"/>
  <path d="M319.402 11.644C318.142 12.904 316.6 13.534 314.776 13.534C312.952 13.534 311.404 12.904 310.132 11.644C308.872 10.372 308.242 8.824 308.242 7C308.242 5.176 308.872 3.634 310.132 2.374C311.404 1.102 312.952 0.466003 314.776 0.466003C316.6 0.466003 318.142 1.102 319.402 2.374C320.674 3.634 321.31 5.176 321.31 7C321.31 8.824 320.674 10.372 319.402 11.644ZM311.59 10.24C312.466 11.092 313.528 11.518 314.776 11.518C316.036 11.518 317.092 11.092 317.944 10.24C318.808 9.376 319.24 8.296 319.24 7C319.24 5.704 318.808 4.63 317.944 3.778C317.092 2.914 316.036 2.482 314.776 2.482C313.516 2.482 312.454 2.914 311.59 3.778C310.738 4.63 310.312 5.704 310.312 7C310.312 8.284 310.738 9.364 311.59 10.24Z" fill="#4ACDFE"/>
  <path d="M334.448 13.3H332.18L329.516 8.71H327.068V13.3H324.998V0.700004H330.038C331.166 0.700004 332.12 1.096 332.9 1.888C333.692 2.656 334.088 3.61 334.088 4.75C334.088 5.554 333.854 6.292 333.386 6.964C332.93 7.624 332.33 8.104 331.586 8.404L334.448 13.3ZM330.038 2.644H327.068V6.856H330.038C330.59 6.856 331.058 6.652 331.442 6.244C331.826 5.836 332.018 5.338 332.018 4.75C332.018 4.162 331.826 3.664 331.442 3.256C331.058 2.848 330.59 2.644 330.038 2.644Z" fill="#4ACDFE"/>
  <path d="M347.684 0.700004H349.897V13.3H347.827V4.318L343.993 10.654H343.741L339.908 4.3V13.3H337.837V0.700004H340.069L343.867 7L347.684 0.700004Z" fill="#4ACDFE"/>
        </svg>
        </div>
        <h1 className={styles.title}>
          Buy, trade and store cryptocurrencies
        </h1>
    </div>
    <div className={styles.illustration}>
      <img src="./images/ill.svg" alt="illustration" />
    </div>
    </div>
    </section>
    
   </>
  )
}

export default MainBanner
