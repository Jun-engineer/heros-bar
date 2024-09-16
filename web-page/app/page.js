import Navigation from "@/components/navigation"
import Concept from "@/components/concept"
import Party from "@/components/party"
import Menu from "@/components/menu"
import News from "@/components/news"
import Calendar from "@/components/calendar"
import Info from "@/components/info"

export default function Top() {
  return (
    <div>

      {/* ナビゲーションメニュー表示 */}
      <Navigation />

      {/* コンセプト表示 */}
      <Concept />

      {/* パーティーページ表示 */}
      <Party />

      {/* メニュー表示 */}
      <Menu />

      {/* お知らせ表示 */}
      <News />

      {/* カレンダー表示 */}
      <Calendar />

      {/* INFO表示 */}
      <Info />

    </div>
  )
}