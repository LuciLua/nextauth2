import styles from "./TableItem.module.scss"

import { FaEdit } from "react-icons/fa"
import { HiDocumentRemove } from "react-icons/hi"

interface TableItemProps {
    admin?: boolean
    date?: string,
    id?: string,
    owner?: string,
    name: string
    email?: string,
    image?: string
}


function TableItem(data: TableItemProps) {

    const { admin, date, id, name, owner, email, image } = data

    return (
        <div className={styles.item} key={id}>
            {admin
                ?
                <div className={styles.item_check}>
                    <input type="checkbox" name="item_check" id="item_check" />
                </div>
                : null}
            {id ?
                <div className={styles.item_id}>
                    <p>{id}</p>
                </div>
                : null}
            <div className={styles.item_name}>
                <p>{name}</p>
            </div>

            {email ?
                <div className={styles.item_name}>
                    <p>{email}</p>
                </div>
                : null}

            <div className={styles.item_owner}>
                {image ?

                    <div className={styles.item_photo_owner}>
                        <img src={image} />
                    </div> :
                    <div className={styles.item_photo_owner}>
                        <img src="https://avatars.githubusercontent.com/u/43728964?v=4" />
                    </div>
                }
                {owner}
            </div>
            {date ?
                <div className={styles.item_date}>
                    <p>{date}</p>
                </div>
                : null}

            {admin
                ?
                <div className={styles.item_actions}>
                    <div className={styles.item_action}>
                        <FaEdit />
                    </div>
                    <div className={styles.item_action}>
                        <HiDocumentRemove />
                    </div>
                </div>
                : null}

        </div>
    )
}

export default TableItem