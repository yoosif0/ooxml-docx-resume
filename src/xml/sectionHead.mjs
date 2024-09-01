export const sectionHead = (label) => `
<w:p w:rsidR="2BA82652" w:rsidP="1249C0AA" w:rsidRDefault="2BA82652" w14:paraId="762D4AA2"
    w14:textId="720F6272">
    <w:pPr>
        <w:spacing w:before="0" w:beforeAutospacing="off" w:after="0"
            w:afterAutospacing="off" w:line="240" w:lineRule="auto" />
    </w:pPr>
    <w:r w:rsidRPr="1249C0AA" w:rsidR="2BA82652">
        <w:rPr>
            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                w:cs="Calibri" />
            <w:b w:val="1" />
            <w:bCs w:val="1" />
            <w:i w:val="0" />
            <w:iCs w:val="0" />
            <w:strike w:val="0" />
            <w:dstrike w:val="0" />
            <w:noProof w:val="0" />
            <w:color w:val="000000" w:themeColor="text1" w:themeTint="FF" w:themeShade="FF" />
            <w:sz w:val="22" />
            <w:szCs w:val="22" />
            <w:u w:val="single" />
            <w:lang w:val="en-US" />
        </w:rPr>
        <w:t>${label}</w:t>
    </w:r>
</w:p>
`;
