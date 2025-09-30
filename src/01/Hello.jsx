import CurrentTime from "./CurrentTime";

function Hello() {
  let name = '김경민';
  return (
    <>
      <div className="text-4xl font-bold text-blue-800">
        Hello React!! {`${name}님 안녕하세요.`}
      </div>
      <CurrentTime />
    </>
  )
}

export default Hello;