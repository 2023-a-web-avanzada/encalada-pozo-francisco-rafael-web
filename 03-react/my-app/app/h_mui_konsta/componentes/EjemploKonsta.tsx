import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";
import {Button} from "@mui/material";

export default function EjemploKonsta() {
    return (
        <>
            <App theme="material">
                <Page>
                    <Navbar
                        title="list"
                    />
                    <BlockTitle>Links, Header, Footer</BlockTitle>
                    <List strongIos outlineIos>
                        <ListItem
                            link
                            header={
                                <Button variant="outlined">Enviar</Button>
                            }
                            title="Jonh Doe"
                            after="edit"
                        />
                    </List>
                </Page>
            </App>
        </>
    )
}