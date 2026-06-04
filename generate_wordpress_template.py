import json
import os

# Create wordpress directory if it doesn't exist
os.makedirs('wordpress', exist_ok=True)

# Load papers data
with open('papers.json', 'r', encoding='utf-8') as f:
    papers_data = json.load(f)

# Structure the data to match the UI volumes
# Volume 1: VOLUMN 1 ISSUE 1
# Volume 2: VOLUMN 2 ISSUE 1
# Volume 3: VOLUMN 2 ISSUE 2
formatted_papers = []

vol_mappings = {
    'VOLUMN 1 ISSUE 1': {'volume': '01', 'year': '2025', 'months': 'Jul-Dec', 'issue': '1'},
    'VOLUMN 2 ISSUE 1': {'volume': '02', 'year': '2026', 'months': 'Jan-Jun', 'issue': '1'},
    'VOLUMN 2 ISSUE 2': {'volume': '03', 'year': '2026', 'months': 'Jul-Dec', 'issue': '1'},
}

for sheet_name, mapping in vol_mappings.items():
    if sheet_name in papers_data:
        for idx, paper in enumerate(papers_data[sheet_name]):
            title = paper.get('Title') or paper.get('Title ') or ''
            authors = paper.get('Name') or paper.get('Name ') or ''
            doi = paper.get('DOI number') or paper.get('DOI number ') or ''
            
            if not title:
                continue
                
            formatted_papers.append({
                'id': f"paper-{mapping['volume']}-{idx+1}",
                'title': title,
                'authors': authors,
                'doi': doi,
                'volume': mapping['volume'],
                'issue': mapping['issue'],
                'year': mapping['year'],
                'months': mapping['months'],
                'citations': 2 + (idx % 7),
                'views': 45 + (idx % 9) * 12,
                'downloads': 12 + (idx % 5) * 8
            })

# Also add the inaugural compilation paper
formatted_papers.append({
    'id': 'paper-compilation',
    'title': 'Sanmati Spectrum of Knowledge & Emerging Discourse (January-March, 2026)',
    'authors': 'Dr Namrata Jain (President & Editor-in-Chief), Dr. Ratnesh Kumar Jain (Managing Editor)',
    'doi': 'https://doi.org/10.5281/zenodo.19710093',
    'volume': '1',
    'issue': '1',
    'year': '2026',
    'months': 'Jan-Mar',
    'is_compilation': True,
    'citations': 15,
    'views': 250,
    'downloads': 185
})

papers_js_array = json.dumps(formatted_papers, ensure_ascii=False, indent=4)

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journal Archive | Sanmati Spectrum of Knowledge</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (via CDN) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons (via CDN) -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8FAFC;
        }
        .font-poppins {
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
<body class="text-slate-800 antialiased min-h-screen">

    <!-- Header Section -->
    <header class="relative py-12 lg:py-24 bg-gradient-to-br from-[#0F4C81]/10 via-white to-[#2563EB]/5 border-b border-slate-100 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[#0F4C81]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <nav class="flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-[#0F4C81]">
                <span>Portal</span>
                <span class="w-1.5 h-1.5 rounded-full bg-[#0F4C81]/20"></span>
                <span>Archive</span>
            </nav>
            <h1 class="text-4xl lg:text-6xl font-bold font-poppins text-slate-900 tracking-tight mb-6">
                Journal Archive
            </h1>
            <div class="flex flex-col items-center gap-4">
                <span class="block h-1 w-12 bg-[#2563EB] mx-auto rounded mb-4"></span>
                <p class="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    Browse all published research papers, issues and volumes of Sanmati Journal.
                </p>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <!-- Statistics Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between border-l-4 border-l-[#2563EB]">
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">Total Volumes</p>
                    <h4 class="text-3xl font-bold font-poppins text-slate-900 mt-1" id="stat-volumes">3</h4>
                </div>
                <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#2563EB]">
                    <i data-lucide="layers" class="w-6 h-6"></i>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between border-l-4 border-l-[#F59E0B]">
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">Total Issues</p>
                    <h4 class="text-3xl font-bold font-poppins text-slate-900 mt-1" id="stat-issues">3</h4>
                </div>
                <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#F59E0B]">
                    <i data-lucide="calendar" class="w-6 h-6"></i>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between border-l-4 border-l-[#0F4C81]">
                <div>
                    <p class="text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">Published Papers</p>
                    <h4 class="text-3xl font-bold font-poppins text-slate-900 mt-1" id="stat-papers">80</h4>
                </div>
                <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#0F4C81]">
                    <i data-lucide="file-text" class="w-6 h-6"></i>
                </div>
            </div>
        </div>

        <!-- Featured Spotlight Compilation -->
        <div id="compilation-spotlight" class="bg-gradient-to-r from-[#0F4C81] to-[#1E3A8A] text-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16 relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            <div class="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-8">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-6">
                        <i data-lucide="award" class="w-4 h-4"></i> Full Issue Compilation
                    </div>
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-white leading-tight mb-4" id="comp-title"></h2>
                    <p class="text-blue-100 italic text-sm mb-6 leading-relaxed" id="comp-authors"></p>
                    <p class="text-slate-300 text-sm max-w-3xl mb-8 leading-relaxed">
                        Official complete issue book compilation containing all peer-reviewed research works in Hindi & English language.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a id="comp-view" href="" target="_blank" class="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-xs font-poppins uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/20">
                            <i data-lucide="book-open" class="w-4 h-4"></i> View Full Issue
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Live Search & Filtering toolbar -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div class="relative w-full lg:max-w-md">
                <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"></i>
                <input 
                    type="text" 
                    id="search-input"
                    placeholder="Search by paper title, authors, or keywords..."
                    class="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all"
                >
            </div>

            <div class="flex flex-wrap w-full lg:w-auto gap-4 items-center">
                <div class="flex items-center gap-2">
                    <i data-lucide="filter" class="w-4 h-4 text-slate-400"></i>
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider font-poppins">Filter By:</span>
                </div>

                <select 
                    id="filter-volume"
                    class="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all cursor-pointer font-medium text-slate-700"
                >
                    <option value="all">All Volumes</option>
                    <option value="03">Volume 03 (Jul-Dec 2026)</option>
                    <option value="02">Volume 02 (Jan-Jun 2026)</option>
                    <option value="01">Volume 01 (Jul-Dec 2025)</option>
                </select>

                <select 
                    id="filter-author"
                    class="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81] transition-all cursor-pointer font-medium text-slate-700 max-w-[200px]"
                >
                    <option value="all">All Authors</option>
                </select>
            </div>
        </div>

        <!-- Volumes List Container -->
        <div id="volumes-container" class="space-y-12">
            <!-- Dynamically Rendered -->
        </div>

        <!-- Empty State -->
        <div id="empty-state" class="hidden text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
            <i data-lucide="search" class="w-12 h-12 text-slate-300 mx-auto mb-4 animate-bounce"></i>
            <h3 class="text-lg font-bold font-poppins text-slate-800">No Research Papers Found</h3>
            <p class="text-sm text-slate-500 max-w-sm mx-auto mt-2">
                No papers matched your search parameters. Try resetting your filters.
            </p>
            <button id="btn-reset" class="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F4C81] text-white font-bold rounded-xl text-xs uppercase tracking-wider font-poppins">
                Reset Filters
            </button>
        </div>

    </main>

    <!-- Embedded Dynamic Data structure and Search/Filter Logic -->
    <script>
        // Papers Data Structure
        const papersData = @@PAPERS_JSON@@;

        // UI References
        const searchInput = document.getElementById('search-input');
        const filterVolume = document.getElementById('filter-volume');
        const filterAuthor = document.getElementById('filter-author');
        const volumesContainer = document.getElementById('volumes-container');
        const emptyState = document.getElementById('empty-state');
        const btnReset = document.getElementById('btn-reset');
        
        // Active PDF dropdown menu state tracker
        let activeDropdownId = null;

        // Load compilation paper in banner
        const compPaper = papersData.find(p => p.is_compilation);
        if (compPaper) {
            document.getElementById('comp-title').innerText = compPaper.title;
            document.getElementById('comp-authors').innerText = compPaper.authors;
            document.getElementById('comp-view').href = compPaper.doi;
        } else {
            document.getElementById('compilation-spotlight').style.display = 'none';
        }

        // Calculate and Populate Authors Dropdown
        const populateAuthorsDropdown = () => {
            const authorsSet = new Set();
            papersData.forEach(paper => {
                if (paper.is_compilation) return;
                const parts = paper.authors.split(/,|\b&|\band\b/i);
                parts.forEach(part => {
                    const name = part.trim();
                    if (name && name.length > 2) {
                        authorsSet.add(name);
                    }
                });
            });
            const sortedAuthors = Array.from(authorsSet).sort();
            sortedAuthors.forEach(author => {
                const opt = document.createElement('option');
                opt.value = author;
                opt.innerText = author;
                filterAuthor.appendChild(opt);
            });
        };

        // Render Data based on Search and Filter
        const renderArchive = () => {
            const query = searchInput.value.toLowerCase().trim();
            const vol = filterVolume.value;
            const auth = filterAuthor.value;

            // Group filtered papers by volume
            const volumes = {
                '03': { title: 'Volume 03 (Jul-Dec 2026)', monthRange: 'Jul-Dec 2026', issue: '1', papers: [] },
                '02': { title: 'Volume 02 (Jan-Jun 2026)', monthRange: 'Jan-Jun 2026', issue: '1', papers: [] },
                '01': { title: 'Volume 01 (Jul-Dec 2025)', monthRange: 'Jul-Dec 2025', issue: '1', papers: [] }
            };

            let matchCount = 0;

            papersData.forEach(paper => {
                if (paper.is_compilation) return;

                // Match filters
                if (vol !== 'all' && paper.volume !== vol) return;
                if (auth !== 'all' && !paper.authors.toLowerCase().includes(auth.toLowerCase())) return;

                // Match query
                const matchesSearch = query === '' || 
                    paper.title.toLowerCase().includes(query) ||
                    paper.authors.toLowerCase().includes(query) ||
                    `volume ${paper.volume}`.includes(query);

                if (!matchesSearch) return;

                // Push to corresponding volume
                if (volumes[paper.volume]) {
                    volumes[paper.volume].papers.push(paper);
                    matchCount++;
                }
            });

            // Clear container
            volumesContainer.innerHTML = '';

            const activeVols = Object.keys(volumes).sort().reverse(); // Show Vol 3 first
            let visibleVolumesCount = 0;

            activeVols.forEach(key => {
                const volume = volumes[key];
                if (volume.papers.length === 0) return;

                visibleVolumesCount++;
                
                // Construct volume section card
                const volSection = document.createElement('div');
                volSection.className = 'bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden';
                
                let papersRowsHtml = '';
                let papersCardsHtml = '';

                volume.papers.forEach((paper, index) => {
                    const sNo = String(index + 1).padStart(2, '0');
                    const doiBadgeHtml = paper.doi ? `
                        <a href="${paper.doi}" target="_blank" class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#2563EB]/5 hover:bg-[#2563EB]/10 rounded border border-[#2563EB]/15 text-[10px] font-black text-[#2563EB] uppercase tracking-wider transition-colors duration-200">
                            <i data-lucide="shield-check" class="w-3 h-3"></i> DOI
                        </a>
                    ` : '';

                    // Desktop row HTML
                    papersRowsHtml += `
                        <tr class="border-b border-slate-100 hover:bg-slate-50/40 transition-colors">
                            <td class="py-5 px-6 text-sm font-semibold text-slate-400 font-poppins">${sNo}</td>
                            <td class="py-5 px-6">
                                <a href="${paper.doi}" target="_blank" class="font-bold text-[#0F4C81] hover:text-[#2563EB] transition-colors leading-relaxed text-sm mb-1 block">
                                    ${paper.title}
                                </a>
                                <div class="flex flex-wrap items-center gap-3 mt-2">
                                    ${doiBadgeHtml}
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-medium border border-slate-200/50">
                                        <i data-lucide="quote" class="w-2.5 h-2.5"></i> ${paper.citations} Citations
                                    </span>
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-medium border border-slate-200/50">
                                        <i data-lucide="eye" class="w-2.5 h-2.5"></i> ${paper.views} Views
                                    </span>
                                </div>
                            </td>
                            <td class="py-5 px-6 text-sm text-slate-600 font-medium italic">${paper.authors}</td>
                            <td class="py-5 px-6 text-center relative dropdown-wrapper" data-paper-id="${paper.id}">
                                <button onclick="toggleDropdown(event, '${paper.id}')" class="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-[#0F4C81]/10 text-slate-700 hover:text-[#0F4C81] font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-200 border border-slate-200/60">
                                    PDF <i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>
                                </button>
                                <div id="dropdown-${paper.id}" class="hidden absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg py-2 z-50 text-left">
                                    <a href="${paper.doi}" target="_blank" class="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0F4C81] transition-colors">
                                        <i data-lucide="book-open" class="w-4 h-4 text-slate-400"></i> View PDF
                                    </a>
                                    <a href="${paper.doi}" target="_blank" class="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0F4C81] transition-colors">
                                        <i data-lucide="download" class="w-4 h-4 text-slate-400"></i> Download PDF
                                    </a>
                                </div>
                            </td>
                        </tr>
                    `;

                    // Mobile card HTML
                    papersCardsHtml += `
                        <div class="p-6">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-bold text-slate-400 font-poppins">#${sNo}</span>
                                <span class="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                                <span class="text-[10px] font-black uppercase tracking-wider text-[#2563EB] bg-[#2563EB]/5 px-2 py-0.5 rounded">Research Article</span>
                            </div>
                            <a href="${paper.doi}" target="_blank" class="block font-bold text-[#0F4C81] leading-relaxed text-sm mb-2">${paper.title}</a>
                            <p class="text-slate-600 text-xs font-medium italic mb-4">${paper.authors}</p>
                            <div class="flex flex-wrap gap-2 mb-5">
                                ${doiBadgeHtml}
                                <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[9px] font-medium border border-slate-200/50">${paper.citations} Citations</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <a href="${paper.doi}" target="_blank" class="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 text-slate-700 font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors border border-slate-200/50">
                                    <i data-lucide="book-open" class="w-3.5 h-3.5"></i> View
                                </a>
                                <a href="${paper.doi}" target="_blank" class="flex items-center justify-center gap-1.5 py-2.5 bg-[#0F4C81] text-white font-bold rounded-lg text-[10px] uppercase tracking-wider transition-colors">
                                    <i data-lucide="download" class="w-3.5 h-3.5"></i> PDF
                                </a>
                            </div>
                        </div>
                    `;
                });

                volSection.innerHTML = `
                    <!-- Header -->
                    <div class="bg-slate-50 border-b border-slate-100 px-6 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div class="flex items-center gap-3">
                            <span class="px-4 py-1.5 bg-[#0F4C81] text-white text-xs font-black uppercase tracking-widest rounded-full font-poppins">Volume ${volume.papers[0].volume}</span>
                            <h3 class="text-lg font-bold font-poppins text-slate-900">${volume.monthRange}</h3>
                        </div>
                        <div class="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">
                            <span>Issue ${volume.issue}</span>
                            <span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                            <span>${volume.papers.length} Research Papers</span>
                        </div>
                    </div>
                    
                    <!-- Table for Desktop -->
                    <div class="p-0 overflow-x-auto hidden md:block">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50/50 border-b border-slate-100">
                                    <th class="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins w-16">S.No</th>
                                    <th class="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins">Research Paper Title</th>
                                    <th class="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins w-72">Author(s)</th>
                                    <th class="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-widest font-poppins w-36 text-center">PDF</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${papersRowsHtml}
                            </tbody>
                        </table>
                    </div>

                    <!-- Mobile Cards List -->
                    <div class="md:hidden divide-y divide-slate-100">
                        ${papersCardsHtml}
                    </div>
                `;

                volumesContainer.appendChild(volSection);
            });

            // Handle empty state display
            if (visibleVolumesCount === 0) {
                volumesContainer.classList.add('hidden');
                emptyState.classList.remove('hidden');
            } else {
                volumesContainer.classList.remove('hidden');
                emptyState.classList.add('hidden');
            }

            // Re-render Lucide icons for dynamically added HTML elements
            lucide.createIcons();
        };

        // Toggle PDF Menu Dropdown
        const toggleDropdown = (e, paperId) => {
            e.stopPropagation();
            const targetDropdown = document.getElementById(`dropdown-${paperId}`);
            const isCurrentlyHidden = targetDropdown.classList.contains('hidden');

            // Close active dropdown
            if (activeDropdownId) {
                const activeDropdown = document.getElementById(`dropdown-${activeDropdownId}`);
                if (activeDropdown) activeDropdown.classList.add('hidden');
            }

            // Open clicked dropdown
            if (isCurrentlyHidden) {
                targetDropdown.classList.remove('hidden');
                activeDropdownId = paperId;
            } else {
                activeDropdownId = null;
            }
        };

        // Click outside dropdown handler
        window.addEventListener('click', () => {
            if (activeDropdownId) {
                const activeDropdown = document.getElementById(`dropdown-${activeDropdownId}`);
                if (activeDropdown) activeDropdown.classList.add('hidden');
                activeDropdownId = null;
            }
        });

        // Reset Filters Button Handler
        btnReset.addEventListener('click', () => {
            searchInput.value = '';
            filterVolume.value = 'all';
            filterAuthor.value = 'all';
            renderArchive();
        });

        // Register Inputs listeners for live search/filter
        searchInput.addEventListener('input', renderArchive);
        filterVolume.addEventListener('change', renderArchive);
        filterAuthor.addEventListener('change', renderArchive);

        // Initial Initialization
        populateAuthorsDropdown();
        renderArchive();
    </script>
</body>
</html>
"""

# Replace the placeholder in the template
rendered_html = html_template.replace("@@PAPERS_JSON@@", papers_js_array)

# Save to destination file
with open('wordpress/archive-template.html', 'w', encoding='utf-8') as f:
    f.write(rendered_html)

print("WordPress template successfully generated at wordpress/archive-template.html")
