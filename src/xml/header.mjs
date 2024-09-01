export const headerFirstPage = ({
  title,
  subtitle,
}) => `<?xml version="1.0" encoding="utf-8"?>
<w:hdr xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
    xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
    xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
    xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
    xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex"
    xmlns:w16cid="http://schemas.microsoft.com/office/word/2016/wordml/cid"
    xmlns:w16="http://schemas.microsoft.com/office/word/2018/wordml"
    xmlns:w16cex="http://schemas.microsoft.com/office/word/2018/wordml/cex"
    xmlns:w16sdtdh="http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="wp14 w15 w16se w16cid w16 w16cex w16sdtdh">
    <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA" w14:paraId="11DBE9AB"
        w14:textId="6D90484B">
        <w:pPr>
            <w:bidi w:val="0" />
            <w:spacing w:before="0" w:beforeAutospacing="off" w:after="0" w:afterAutospacing="off" />
            <w:jc w:val="center" />
        </w:pPr>
        <w:r w:rsidRPr="1249C0AA" w:rsidR="1249C0AA">
            <w:rPr>
                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri" />
                <w:b w:val="1" />
                <w:bCs w:val="1" />
                <w:i w:val="0" />
                <w:iCs w:val="0" />
                <w:strike w:val="0" />
                <w:dstrike w:val="0" />
                <w:noProof w:val="0" />
                <w:color w:val="000000" w:themeColor="text1" w:themeTint="FF" w:themeShade="FF" />
                <w:sz w:val="40" />
                <w:szCs w:val="40" />
                <w:u w:val="none" />
                <w:lang w:val="en-US" />
            </w:rPr>
            <w:t>${title}</w:t>
        </w:r>
    </w:p>
    <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA" w14:paraId="3B129BF6"
        w14:textId="004B4280">
        <w:pPr>
            <w:bidi w:val="0" />
            <w:spacing w:before="0" w:beforeAutospacing="off" w:after="0" w:afterAutospacing="off" />
            <w:jc w:val="center" />
        </w:pPr>
        <w:r w:rsidRPr="1249C0AA" w:rsidR="1249C0AA">
            <w:rPr>
                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri" />
                <w:b w:val="0" />
                <w:bCs w:val="0" />
                <w:i w:val="0" />
                <w:iCs w:val="0" />
                <w:strike w:val="0" />
                <w:dstrike w:val="0" />
                <w:noProof w:val="0" />
                <w:color w:val="000000" w:themeColor="text1" w:themeTint="FF" w:themeShade="FF" />
                <w:sz w:val="22" />
                <w:szCs w:val="22" />
                <w:u w:val="none" />
                <w:lang w:val="en-US" />
            </w:rPr>
            <w:t xml:space="preserve">${subtitle}</w:t>
        </w:r>
    </w:p>
    <w:p w:rsidR="1249C0AA" w:rsidRDefault="1249C0AA" w14:paraId="0CB436DA" w14:textId="6C891CFB" />
    <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA" w14:paraId="00C427D1"
        w14:textId="52223C69">
        <w:pPr>
            <w:pStyle w:val="Header" />
            <w:bidi w:val="0" />
        </w:pPr>
    </w:p>
</w:hdr>`;

export const header2ndPage = ({
  left = "",
  middle = "",
}) => `<?xml version="1.0" encoding="utf-8"?>
<w:hdr xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
    xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
    xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
    xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
    xmlns:w16se="http://schemas.microsoft.com/office/word/2015/wordml/symex"
    xmlns:w16cid="http://schemas.microsoft.com/office/word/2016/wordml/cid"
    xmlns:w16="http://schemas.microsoft.com/office/word/2018/wordml"
    xmlns:w16cex="http://schemas.microsoft.com/office/word/2018/wordml/cex"
    xmlns:w16sdtdh="http://schemas.microsoft.com/office/word/2020/wordml/sdtdatahash"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="wp14 w15 w16se w16cid w16 w16cex w16sdtdh">
    <w:tbl>
        <w:tblPr>
            <w:tblStyle w:val="TableNormal" />
            <w:bidiVisual w:val="0" />
            <w:tblW w:w="0" w:type="auto" />
            <w:tblLayout w:type="fixed" />
            <w:tblLook w:val="06A0" w:firstRow="1" w:lastRow="0" w:firstColumn="1" w:lastColumn="0"
                w:noHBand="1" w:noVBand="1" />
        </w:tblPr>
        <w:tblGrid>
            <w:gridCol w:w="3120" />
            <w:gridCol w:w="3120" />
            <w:gridCol w:w="3120" />
        </w:tblGrid>
        <w:tr w:rsidR="1249C0AA" w:rsidTr="4E7D3C0B" w14:paraId="03AD3E91">
            <w:trPr>
                <w:trHeight w:val="300" />
            </w:trPr>
            <w:tc>
                <w:tcPr>
                    <w:tcW w:w="3120" w:type="dxa" />
                    <w:tcMar />
                </w:tcPr>
                <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA"
                    w14:paraId="1ABEF899" w14:textId="47B0467A">
                    <w:pPr>
                        <w:pStyle w:val="Header" />
                        <w:bidi w:val="0" />
                        <w:ind w:left="-115" />
                        <w:jc w:val="left" />
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                    </w:pPr>
                    <w:r w:rsidRPr="4E7D3C0B" w:rsidR="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:t>${left}</w:t>
                    </w:r>
                </w:p>
            </w:tc>
            <w:tc>
                <w:tcPr>
                    <w:tcW w:w="3120" w:type="dxa" />
                    <w:tcMar />
                </w:tcPr>
                <w:p w:rsidR="1249C0AA" w:rsidP="4E7D3C0B" w:rsidRDefault="1249C0AA"
                    w14:paraId="068B7CB2" w14:textId="39482328">
                    <w:pPr>
                        <w:pStyle w:val="Header" />
                        <w:bidi w:val="0" />
                        <w:jc w:val="center" />
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:b w:val="0" />
                            <w:bCs w:val="0" />
                            <w:i w:val="0" />
                            <w:iCs w:val="0" />
                            <w:strike w:val="0" />
                            <w:dstrike w:val="0" />
                            <w:noProof w:val="0" />
                            <w:color w:val="000000" w:themeColor="text1" w:themeTint="FF"
                                w:themeShade="FF" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                            <w:u w:val="none" />
                            <w:lang w:val="en-US" />
                        </w:rPr>
                    </w:pPr>
                    <w:r w:rsidRPr="4E7D3C0B" w:rsidR="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:b w:val="0" />
                            <w:bCs w:val="0" />
                            <w:i w:val="0" />
                            <w:iCs w:val="0" />
                            <w:strike w:val="0" />
                            <w:dstrike w:val="0" />
                            <w:noProof w:val="0" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                            <w:lang w:val="en-US" />
                        </w:rPr>
                        <w:t>${middle}</w:t>
                    </w:r>
                </w:p>
            </w:tc>
            <w:tc>
                <w:tcPr>
                    <w:tcW w:w="3120" w:type="dxa" />
                    <w:tcMar />
                </w:tcPr>
                <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA"
                    w14:paraId="59B88191" w14:textId="0ADCD6A9">
                    <w:pPr>
                        <w:pStyle w:val="Header" />
                        <w:bidi w:val="0" />
                        <w:ind w:right="-115" />
                        <w:jc w:val="right" />
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                    </w:pPr>
                    <w:r w:rsidRPr="4E7D3C0B" w:rsidR="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:t xml:space="preserve">Page </w:t>
                    </w:r>
                    <w:r w:rsidRPr="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:fldChar w:fldCharType="begin" />
                    </w:r>
                    <w:r>
                        <w:instrText xml:space="preserve">PAGE</w:instrText>
                    </w:r>
                    <w:r>
                        <w:fldChar w:fldCharType="separate" />
                    </w:r>
                    <w:r w:rsidRPr="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:fldChar w:fldCharType="end" />
                    </w:r>
                    <w:r w:rsidRPr="4E7D3C0B" w:rsidR="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:t xml:space="preserve"> of </w:t>
                    </w:r>
                    <w:r w:rsidRPr="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:fldChar w:fldCharType="begin" />
                    </w:r>
                    <w:r>
                        <w:instrText xml:space="preserve">NUMPAGES</w:instrText>
                    </w:r>
                    <w:r>
                        <w:fldChar w:fldCharType="separate" />
                    </w:r>
                    <w:r w:rsidRPr="4E7D3C0B">
                        <w:rPr>
                            <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri"
                                w:cs="Calibri" />
                            <w:sz w:val="20" />
                            <w:szCs w:val="20" />
                        </w:rPr>
                        <w:fldChar w:fldCharType="end" />
                    </w:r>
                </w:p>
            </w:tc>
        </w:tr>
    </w:tbl>
    <w:p w:rsidR="1249C0AA" w:rsidP="1249C0AA" w:rsidRDefault="1249C0AA" w14:paraId="1B72B17B"
        w14:textId="0874CA40">
        <w:pPr>
            <w:pStyle w:val="Normal" />
            <w:bidi w:val="0" />
            <w:rPr>
                <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:eastAsia="Calibri" w:cs="Calibri" />
                <w:sz w:val="20" />
                <w:szCs w:val="20" />
            </w:rPr>
        </w:pPr>
    </w:p>
</w:hdr>
`;
