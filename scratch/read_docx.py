import zipfile
import xml.etree.ElementTree as ET

docx_path = "/Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati doc/लेखक एवं संपादक के रूप में प्रकाशित प्रमुख संकलन.docx"

try:
    with zipfile.ZipFile(docx_path) as z:
        xml_content = z.read('word/document.xml')
        root = ET.fromstring(xml_content)
        
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        paragraphs = []
        for p in root.findall('.//w:p', ns):
            texts = [t.text for t in p.findall('.//w:t', ns) if t.text]
            if texts:
                paragraphs.append("".join(texts))
        
        with open("/Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/scratch/extracted_books.txt", "w", encoding="utf-8") as f:
            f.write("\n".join(paragraphs))
        print("Success! Extracted to scratch/extracted_books.txt")
except Exception as e:
    print(f"Error: {e}")
