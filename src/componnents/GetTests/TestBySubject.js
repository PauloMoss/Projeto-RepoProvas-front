import { useParams } from 'react-router-dom';
import GenericListOfTests from './GenericListOfTests';

export default function TestBySubject() {

    const { id, subject } = useParams();
    const type = "subject";
    const url = `${process.env.REACT_APP_API_BASE_URL}/tests/subject/${id}`


    return (
        <GenericListOfTests
        title = {subject}
        type = {type}
        url = {url} />
    );
}