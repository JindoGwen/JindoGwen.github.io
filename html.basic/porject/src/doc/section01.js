import '../css/section01.css';
const section01 = ()=> { 
    return (
        <section className="about">
            <h2> <span className="mainColor">CEO'S</span>GREETINGS</h2>
            <p>새로운 미래를 열어가는 우투드영투드우</p>
            <div className="container">
                <div className="des">
                    <p className="title">
                        웹서비스의<span className="mainColor"> 새로운 미래를</span> <br />
                        <span className="mainColor">우투드영투드우</span>가 만들어 가겠습니다.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Temporibus voluptatibus dolores tempore ipsam nesciunt veritatis molestiae hic pariatur reprehenderit aspernatur!
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Vero quae assumenda est corporis eius, ab ut, atque cupiditate vitae nesciunt expedita modi, id illo molestiae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Vel placeat, itaque vitae quisquam fugit accusantium.
                    </p>

                    <p>우투드영투드우 임직원 일동</p>
                </div>
                <figure>
                    <img src="./img/b-1.webp" alt="" />
                </figure>
            </div>
            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsiveTable">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>주소</th>
                                <td>부산시 동래구 사직동 1234-56 쌍둥이 돼지국밥 옆</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>000-1234-3564</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
}

export default section01;