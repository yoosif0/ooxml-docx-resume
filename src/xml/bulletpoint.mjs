export const bulletPointPartialBold = (bold, normal) => `
<w:p w:rsidR="0D2EF50D" w:rsidP="1249C0AA" w:rsidRDefault="0D2EF50D" w14:paraId="69A0A5DB"
            w14:textId="1A9CC0D9">
            <w:pPr>
                <w:pStyle w:val="BulletStyle1" />
                <w:spacing w:before="0" w:beforeAutospacing="off" w:after="0"
                    w:afterAutospacing="off" w:line="240" w:lineRule="auto" />
                <w:rPr />
            </w:pPr>
            <w:r w:rsidRPr="1249C0AA" w:rsidR="0D2EF50D">
                <w:rPr>
                    <w:noProof w:val="0" />
                    <w:lang w:val="en-US" />
                    <w:b/>
                </w:rPr>
                <w:t>${bold}</w:t>
            </w:r>
            <w:r w:rsidRPr="1249C0AA" w:rsidR="0D2EF50D">
                <w:rPr>
                    <w:noProof w:val="0" />
                    <w:lang w:val="en-US" />
                </w:rPr>
                <w:t>${normal}</w:t>
            </w:r>
        </w:p>
`;
