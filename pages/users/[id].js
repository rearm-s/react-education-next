import MainContainer from '../../components/MainContainer';

import styles from '../../styles/pages/user.module.scss';

const User = ({ user }) => (
    <MainContainer keywords={user.name}>
        <div className={styles.user}>
            <h1>Пользователь с id {user.id}</h1>
            <div>Имя пользователя - {user.name}</div>
        </div>
    </MainContainer>
);

export default User;

export async function getServerSideProps({ params }) {

    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user }, // will be passed to the page component as props
    };

}
