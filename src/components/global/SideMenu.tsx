import Image from "next/image";

const SideMenu = () => {
    return (
        <div className="side-menu">
            <div className="logo">
                <div className="logo-pic">
                    <Image
                        src="/img/logo.svg"
                        alt="cache-log"
                        width={48.16}
                        height={55.37}
                    />
                </div>
                <div className="logo-title">
                    Cache
                </div>
            </div>
            <div className="menu-items">
                <div className="menu-stake">
                    <div className="menu-stake-pic">
                        <Image
                            src="/img/dollar-coin-stack.svg"
                            alt="stake-pic"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="menu-stake-title">
                        Stake
                    </div>
                </div>
                <div className="menu-marketplace">
                    <div className="menu-marketplace-pic">
                        <Image
                            src="/img/shop.svg"
                            alt="stake-pic"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="menu-marketplace-title">
                        Marketplace
                    </div>
                </div>
                <div className="menu-marketplace">
                    <div className="menu-marketplace-pic">
                        <Image
                            src="/img/dashboard.svg"
                            alt="stake-pic"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="menu-marketplace-title">
                        Dashboard
                    </div>
                </div>
                <div className="menu-marketplace">
                    <div className="menu-marketplace-pic">
                        <Image
                            src="/img/globe.svg"
                            alt="stake-pic"
                            width={18}
                            height={18}
                        />
                    </div>
                    <div className="menu-marketplace-title">
                        CacheCompute
                    </div>
                </div>
            </div>
            <div className="menu-price">
                <div className="menu-price-title">
                    $Cache Price: .47
                </div>
                <div className="menu-price-value">
                    +74%
                </div>
            </div>
            <div className="menu-socials">
                <div className="menu-socials-twiter">
                    <Image
                        src="/img/twiter.svg"
                        alt="stake-pic"
                        width={22}
                        height={23}
                    />
                </div>
                <div className="menu-socials-notebook">
                    <Image
                        src="/img/notebook.svg"
                        alt="stake-pic"
                        width={42.18}
                        height={30.39}
                    />
                </div>
                <div className="menu-socials-telegram">
                    <Image
                        src="/img/telegram.svg"
                        alt="stake-pic"
                        width={26.29}
                        height={23}
                    />
                </div>
            </div>
        </div>
    );
}

export default SideMenu;