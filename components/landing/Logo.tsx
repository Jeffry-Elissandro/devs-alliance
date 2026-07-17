import Image from "next/image";

export default function Logo() {
    return (
        <div className="logo-container">

            <Image
                src="/images/devs_alliance_icon.png"
                alt="DEV'S ALLIANCE"
                width={180}
                height={180}
                priority
                className="logo"
            />

        </div>
    );
}