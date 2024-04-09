import Icon from '@/app/_components/atoms/Icon/Icon'

const Home = async () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>Hello</div>

    <div className="flex gap-4 [&>*]:border">
      <Icon name="pero" />
      <Icon name="pero" className="size-4" />
      <Icon name="pero" className="size-10" />
    </div>
  </main>
)

export default Home
