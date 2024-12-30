import Header from "@/components/global/Header";
import Stake from "@/components/stake/Stake";

export default function Home() {
  return (
    <div className="home">
      <div>
        <Header />
        <Stake />
      </div>
    </div>
  );
}
