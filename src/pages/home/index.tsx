import Loader from "@/components/common/loader/loader"
import SubmitButton from "@/components/shared/SubmitButton"
import ToastNotification from "@/components/shared/ToastNotification"

const Home = () => {
  const submit = () => {
    ToastNotification({
      title: "hell",
      description: "Card Created Successfully",
      type: "success",
    })
  }
  return (
    <div className="flex flex-col justify-center gap-5 items-center py-20">
      <h1>Home</h1>
      {/* <Loader /> */}

      <SubmitButton clickFn={submit} className="bg-red-500 cursor-pointer">Click me</SubmitButton>
    </div>
  )
}

export default Home
