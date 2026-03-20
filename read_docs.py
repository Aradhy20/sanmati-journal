import subprocess
try:
    import docx2txt
except ImportError:
    subprocess.check_call(["pip", "install", "docx2txt"])
    import docx2txt

text1 = docx2txt.process(r'f:\Aradhy\anti\fistudy-pack\sanmati doc\DR. NAMRTA JAIN BRIEF.docx')
with open('f:/Aradhy/anti/fistudy-pack/namrta.txt', 'w', encoding='utf-8') as f:
    f.write(text1)

text2 = docx2txt.process(r'f:\Aradhy\anti\fistudy-pack\sanmati doc\Dr. Ratnesh Jain Brief.docx')
with open('f:/Aradhy/anti/fistudy-pack/ratnesh.txt', 'w', encoding='utf-8') as f:
    f.write(text2)
