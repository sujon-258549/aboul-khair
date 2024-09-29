
import Homebanner from "@/conponent/Home/Homebanner";
import Homevideo from "@/conponent/Home/Homevideo";
import Supperbrand from "@/conponent/Home/Supperbrand";
import Homebanner2 from "@/conponent/Home/Homebanner2";
import Powerbrands from "@/conponent/Home/Powerbrands";
import Allcommonbrand from "@/conponent/Home/Allcommonbrand";

export default function Home() {
  return (
    <main className="">
     <Homebanner></Homebanner>
     <Homevideo></Homevideo>
     <Supperbrand></Supperbrand>
     <Homebanner2></Homebanner2>
    <div>   
    <Powerbrands></Powerbrands>
    <Allcommonbrand></Allcommonbrand>
    </div>
    </main>
  );
}
