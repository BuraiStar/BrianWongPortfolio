import { Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import StackGrid from "react-stack-grid"

export default function ExperienceBlock(){
    return (
        <Paper sx={{backgroundColor: (theme) => theme.palette.customBackgroundColor.odd}}>
            <StackGrid
                columnWidth={150}
            >
                <Card key="key1">Item 1</Card>
                <div key="key3">Item 3</div>
                <div key="key4">Item 3</div>
                <div key="key5">Item 3</div>
                <div key="key6">Item 3</div>
                <div key="key7">Item 3</div>
                <div key="key8">Item 3</div>
                <div key="key9">Item 3</div>
                <div key="key10">Item 3</div>
                <div key="key11">Item 3</div>
                <div key="key12">Item 3</div>
                <div key="key13">Item 3</div>
                <div key="key14">Item 3</div>
                <div key="key15">Item 3</div>
                <div key="key16">Item 3</div>
                <div key="key17">Item 3</div>
            </StackGrid>
        </Paper>
    )
}