import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div className="flex flex-col justify-center justify-content-center items-center">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="small button" styles="text-sm px-3 py-2 rounded-sm bg-blue-400 font-bold hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700" />

      <Card />
      <Button title="medium button" styles="text-md px-3 py-2 rounded-md bg-blue-400 font-bold hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700" />
      <Card />
      <Button title="large button" styles="text-lg px-3 py-2 rounded-lg bg-blue-400 font-bold hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700" />
      <Card />
      <Button title="large button" styles="text-lg px-3 py-2 rounded-full bg-blue-400 font-bold hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700" />
    </div>
  )
}

export default Landing;

