import { Container } from "react-bootstrap";
import Film from "./Film";

function Films() {
    return (
        <>
            <p className="text-white fs-2 fw-bold text-start px-2">Trending Now</p>
            <Container>
                <Film film="family" />
            </Container>

            <p className="text-white fs-2 fw-bold text-start px-2">Watch it Again..</p>
            <Container>
                <Film film="the woman" />
            </Container>

            <p className="text-white fs-2 fw-bold text-start px-2">NEW IN</p>
            <Container>
                <Film film="Doctors" />
            </Container>
        </>
    )
}

export default Films
