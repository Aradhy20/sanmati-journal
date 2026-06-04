import Head from 'next/head';
import { useState } from 'react';

type Tab = 'submissions' | 'submit' | 'profile';

interface SubmissionItem {
  id: string;
  title: string;
  status: string;
  version: number;
  createdAt: string;
  _count: { reviews: number };
}

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  SUBMITTED:         { bg: '#eff6ff', text: '#1d4ed8', label: 'Submitted' },
  UNDER_REVIEW:      { bg: '#fef3c7', text: '#92400e', label: 'Under Review' },
  REVISION_REQUIRED: { bg: '#fff7ed', text: '#c2410c', label: 'Revision Required' },
  ACCEPTED:          { bg: '#ecfdf5', text: '#065f46', label: 'Accepted ✓' },
  REJECTED:          { bg: '#fef2f2', text: '#991b1b', label: 'Rejected' },
  PUBLISHED:         { bg: '#f5f3ff', text: '#6d28d9', label: 'Published' },
};

export default function AuthorDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('submissions');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');

  // Demo submissions for display
  const demoSubmissions: SubmissionItem[] = [
    {
      id: 'ms-001',
      title: 'A Novel Approach to High-Throughput Sequence Analysis',
      status: 'UNDER_REVIEW',
      version: 1,
      createdAt: '2026-05-15T10:30:00Z',
      _count: { reviews: 2 },
    },
    {
      id: 'ms-002',
      title: 'Machine Learning Applications in Climate Data Modelling',
      status: 'REVISION_REQUIRED',
      version: 2,
      createdAt: '2026-04-02T08:00:00Z',
      _count: { reviews: 3 },
    },
  ];

  const addKeyword = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && keywordInput.trim() && keywords.length < 10) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
    }
  };

  const removeKeyword = (i: number) => setKeywords(keywords.filter((_, idx) => idx !== i));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulate API call
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setActiveTab('submissions');
  };

  const card = {
    background: 'white',
    borderRadius: '16px',
    padding: '28px 32px',
    boxShadow: '0 2px 16px rgba(124,58,237,0.07)',
    border: '1px solid #ede9fe',
    marginBottom: '20px',
  };

  return (
    <>
      <Head>
        <title>Author Dashboard | Sanmati Journal</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div style={{ fontFamily: "'Inter', sans-serif", background: '#f5f3ff', minHeight: '100vh' }}>

        {/* ── Sidebar Layout ── */}
        <div style={{ display: 'flex', minHeight: '100vh' }}>

          {/* Sidebar */}
          <aside style={{
            width: '240px', background: 'linear-gradient(160deg, #1a1a2e 0%, #0f3460 100%)',
            color: 'white', padding: '32px 20px', flexShrink: 0,
          }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: '18px', marginBottom: '4px'
              }}>
                Sanmati <span style={{ color: '#a78bfa' }}>Spectrum</span>
              </div>
              <div style={{ fontSize: '11px', color: '#7c83a0' }}>Author Portal</div>
            </div>

            {/* User avatar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '12px', background: 'rgba(255,255,255,0.08)',
              borderRadius: '10px', marginBottom: '32px',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '16px'
              }}>A</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Aradhy Jain</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>Author</div>
              </div>
            </div>

            {/* Nav items */}
            {[
              { id: 'submissions' as Tab, icon: '📄', label: 'My Submissions' },
              { id: 'submit' as Tab, icon: '✏️', label: 'New Submission' },
              { id: 'profile' as Tab, icon: '👤', label: 'My Profile' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: '100%', textAlign: 'left', padding: '12px 16px',
                  borderRadius: '10px', border: 'none', cursor: 'pointer',
                  marginBottom: '4px', fontFamily: "'Inter', sans-serif",
                  fontSize: '14px', fontWeight: activeTab === item.id ? 600 : 400,
                  background: activeTab === item.id ? 'rgba(167,139,250,0.2)' : 'transparent',
                  color: activeTab === item.id ? '#a78bfa' : '#9ca3af',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  transition: 'all 0.15s',
                }}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}

            <div style={{ marginTop: 'auto', paddingTop: '40px', fontSize: '11px', color: '#5b6284' }}>
              <a href="/" style={{ color: '#7c83a0' }}>← Back to Journal</a>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>

            {/* ── SUBMISSIONS TAB ── */}
            {activeTab === 'submissions' && (
              <>
                <h1 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '24px',
                  fontWeight: 700, color: '#1a1a2e', marginBottom: '24px'
                }}>
                  My Submissions
                </h1>

                {submitSuccess && (
                  <div style={{
                    background: '#ecfdf5', border: '1px solid #6ee7b7',
                    borderRadius: '10px', padding: '16px 20px', marginBottom: '20px',
                    color: '#065f46', fontSize: '14px'
                  }}>
                    ✓ Your manuscript was submitted successfully! The editorial team will be in touch.
                  </div>
                )}

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
                  {[
                    { label: 'Total Submitted', value: '2', icon: '📄' },
                    { label: 'Under Review', value: '1', icon: '🔍' },
                    { label: 'Revisions Needed', value: '1', icon: '✏️' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ ...card, padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', marginBottom: '4px' }}>{stat.icon}</div>
                      <div style={{ fontSize: '28px', fontWeight: 700, color: '#7c3aed' }}>{stat.value}</div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Submissions list */}
                {demoSubmissions.map((ms) => {
                  const s = STATUS_COLORS[ms.status] || STATUS_COLORS.SUBMITTED;
                  return (
                    <div key={ms.id} style={{ ...card }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                          <span style={{
                            background: s.bg, color: s.text, fontSize: '11px', fontWeight: 700,
                            padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase',
                          }}>
                            {s.label}
                          </span>
                          <h3 style={{
                            fontFamily: "'Outfit', sans-serif", fontSize: '17px',
                            fontWeight: 600, color: '#1a1a2e', margin: '10px 0 6px'
                          }}>
                            {ms.title}
                          </h3>
                          <div style={{ fontSize: '13px', color: '#6b7280' }}>
                            Version {ms.version} · Submitted {new Date(ms.createdAt).toLocaleDateString()} · {ms.title === 'UNDER_REVIEW' ? ms._count.reviews : ms._count.reviews} reviews received
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                          <button style={{
                            padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                            background: '#f5f3ff', color: '#7c3aed', border: '1px solid #ddd6fe', cursor: 'pointer',
                          }}>
                            View Details
                          </button>
                          {ms.status === 'REVISION_REQUIRED' && (
                            <button style={{
                              padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
                              background: '#7c3aed', color: 'white', border: 'none', cursor: 'pointer',
                            }}>
                              Submit Revision
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* ── SUBMIT NEW MANUSCRIPT TAB ── */}
            {activeTab === 'submit' && (
              <>
                <h1 style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: '24px',
                  fontWeight: 700, color: '#1a1a2e', marginBottom: '8px'
                }}>
                  New Manuscript Submission
                </h1>
                <p style={{ color: '#6b7280', marginBottom: '28px', fontSize: '14px' }}>
                  Complete all fields carefully. Your submission will be reviewed within 3–5 business days.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Manuscript metadata */}
                  <div style={{ ...card }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#1a1a2e', marginBottom: '20px' }}>
                      1 · Manuscript Details
                    </h2>

                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Article Title *
                    </label>
                    <input
                      type="text" required minLength={10}
                      placeholder="A clear, descriptive academic title"
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        border: '1.5px solid #ddd6fe', fontSize: '14px', marginBottom: '20px',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />

                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Abstract * (minimum 100 words)
                    </label>
                    <textarea
                      required minLength={100} rows={6}
                      placeholder="Write a clear, structured abstract covering background, methods, results, and conclusions..."
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        border: '1.5px solid #ddd6fe', fontSize: '14px', marginBottom: '20px',
                        fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box',
                      }}
                    />

                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Keywords * (3–10 · Press Enter to add)
                    </label>
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px',
                      padding: '8px', border: '1.5px solid #ddd6fe', borderRadius: '8px', minHeight: '44px',
                    }}>
                      {keywords.map((kw, i) => (
                        <span key={i} style={{
                          background: '#f5f3ff', color: '#7c3aed', padding: '3px 10px',
                          borderRadius: '20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px'
                        }}>
                          {kw}
                          <button type="button" onClick={() => removeKeyword(i)}
                            style={{ background: 'none', border: 'none', color: '#7c3aed', cursor: 'pointer', padding: 0, fontSize: '14px' }}>
                            ×
                          </button>
                        </span>
                      ))}
                      <input
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyDown={addKeyword}
                        placeholder={keywords.length === 0 ? 'Type a keyword and press Enter...' : ''}
                        style={{
                          border: 'none', outline: 'none', fontSize: '13px',
                          flexGrow: 1, minWidth: '120px', background: 'transparent',
                        }}
                      />
                    </div>
                    <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '20px' }}>
                      {keywords.length}/10 keywords added
                    </div>

                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                      Manuscript File URL * (Google Drive / Dropbox shareable link)
                    </label>
                    <input
                      type="url" required
                      placeholder="https://drive.google.com/file/d/..."
                      style={{
                        width: '100%', padding: '10px 14px', borderRadius: '8px',
                        border: '1.5px solid #ddd6fe', fontSize: '14px',
                        outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Declaration */}
                  <div style={{ ...card }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#1a1a2e', marginBottom: '16px' }}>
                      2 · Author Declaration
                    </h2>
                    {[
                      'This manuscript has not been published elsewhere and is not under review at any other journal.',
                      'All authors have contributed significantly and agreed to the submission.',
                      'I declare no conflicts of interest related to this submission.',
                    ].map((dec, i) => (
                      <label key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px', cursor: 'pointer' }}>
                        <input type="checkbox" required style={{ marginTop: '2px', accentColor: '#7c3aed' }} />
                        <span style={{ fontSize: '14px', color: '#374151' }}>{dec}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || keywords.length < 3}
                    style={{
                      background: isSubmitting ? '#a78bfa' : 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                      color: 'white', padding: '14px 36px', borderRadius: '10px',
                      border: 'none', fontWeight: 700, fontSize: '15px', cursor: isSubmitting ? 'wait' : 'pointer',
                      boxShadow: '0 4px 16px rgba(124,58,237,0.3)', width: '100%',
                      transition: 'all 0.2s',
                    }}
                  >
                    {isSubmitting ? '⏳ Submitting Manuscript...' : '🚀 Submit Manuscript for Review'}
                  </button>
                </form>
              </>
            )}

            {/* ── PROFILE TAB ── */}
            {activeTab === 'profile' && (
              <>
                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '24px', fontWeight: 700, color: '#1a1a2e', marginBottom: '24px' }}>
                  My Researcher Profile
                </h1>
                <div style={{ ...card }}>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '72px', height: '72px', borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '28px', fontWeight: 700, color: 'white',
                    }}>A</div>
                    <div>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>
                        Aradhy Jain
                      </h2>
                      <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>Indian Institute of Science</p>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        background: '#f0fdf4', color: '#16a34a', padding: '4px 12px',
                        borderRadius: '20px', fontSize: '12px', border: '1px solid #bbf7d0',
                      }}>
                        <span>🆔</span>
                        <span>ORCID: 0000-0003-4211-1902</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #f3f4f6' }}>
                    <button style={{
                      padding: '8px 20px', background: '#f5f3ff', color: '#7c3aed',
                      border: '2px solid #ddd6fe', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', fontSize: '13px',
                    }}>
                      🔗 Link / Update ORCID iD
                    </button>
                  </div>
                </div>
              </>
            )}

          </main>
        </div>
      </div>
    </>
  );
}
